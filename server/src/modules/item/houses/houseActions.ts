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

const add: RequestHandler = async (req, res, next) => {
  try {
    const newHouse = {
      name: req.body.name,
      img: req.body.img,
      traits: req.body.traits,
      founder: req.body.founder,
      description: req.body.description,
    };
    const insertId = await HouseRepository.create(newHouse);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const edit: RequestHandler = async (req, res, next) => {
  try {
    const house = {
      id: Number(req.params.id),
      name: req.body.name,
      img: req.body.img,
      traits: req.body.traits,
      founder: req.body.founder,
      description: req.body.description,
    };

    const affectedRows = await HouseRepository.update(house);

    if (affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    next(err);
  }
};

const destroy: RequestHandler = async (req, res, next) => {
  try {
    const houseId = Number(req.params.id);

    await HouseRepository.delete(houseId);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

export default { browse, read, add, edit, destroy };
