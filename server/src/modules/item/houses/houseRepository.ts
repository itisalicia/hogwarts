import databaseClient from "../../../../database/client";
import type { Result, Rows } from "../../../../database/client";

type House = {
  id: number;
  img: string;
  name: string;
  traits: string;
  founder: string;
  description: string;
};

class HouseRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("select * from House");
    return rows as House[];
  }

  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "select * from house where id = ?",
      [id],
    );
    return rows[0] as House;
  }
}

export default new HouseRepository();
