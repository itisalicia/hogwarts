import databaseClient from "../../../../database/client";
import type { Result, Rows } from "../../../../database/client";

type Subject = {
  id: number;
  img: string;
  name: string;
  description: string;
};

class SubjectRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("select * from Subject");
    return rows as Subject[];
  }

  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "select * from Subject where id = ?",
      [id],
    );
    return rows[0] as Subject;
  }
}

export default new SubjectRepository();
