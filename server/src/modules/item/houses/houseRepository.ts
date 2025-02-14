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

  async create(house: Omit<House, "id">) {
    const [result] = await databaseClient.query<Result>(
      "insert into house (img, name, traits, founder, description) values(?, ?, ?, ?, ?)",
      [house.img, house.name, house.traits, house.founder, house.description],
    );
    return result.insertId;
  }

  async update(house: House) {
    const [result] = await databaseClient.query<Result>(
      "update house set name = ?, img = ?, traits = ?, founder = ?, description = ? where id = ?",
      [
        house.name,
        house.img,
        house.traits,
        house.founder,
        house.description,
        house.id,
      ],
    );
    return result.affectedRows;
  }

  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      "delete from house where id = ?",
      [id],
    );
    return result.affectedRows;
  }
}

export default new HouseRepository();
