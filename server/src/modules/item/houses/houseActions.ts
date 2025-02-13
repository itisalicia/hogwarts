import type { RequestHandler } from "express";
import HouseRepository from "./houseRepository";

type House = {
  id: number;
  img: string;
  name: string;
  traits: string;
  founder: string;
  description: string;
};

const browse: RequestHandler = async (req, res, next) => {
  try {
    const houses = await HouseRepository.readAll();
    res.json(houses);
  } catch (err) {
    next;
  }
};

const read: RequestHandler = async (req, res, next) => {
  try {
    const houseId = Number(req.params.id);
    const house = await HouseRepository.read(houseId);

    if (house === null) {
      res.sendStatus(404);
    } else {
      res.json(house);
    }
  } catch (err) {
    next(err);
  }
};

export default { browse, read };
