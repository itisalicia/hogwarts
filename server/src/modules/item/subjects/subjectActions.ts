import type { RequestHandler } from "express";
import SubjectRepository from "./subjectRepository";

type Subject = {
  id: number;
  img: string;
  name: string;
  description: string;
};

const browse: RequestHandler = async (req, res, next) => {
  try {
    const subjects = await SubjectRepository.readAll();
    res.json(subjects);
  } catch (err) {
    next(err);
  }
};

const read: RequestHandler = async (req, res, next) => {
  try {
    const subjectId = Number(req.params.id);
    const subject = await SubjectRepository.read(subjectId);

    if (subject === null) {
      res.sendStatus(404);
    } else {
      res.json(subject);
    }
  } catch (err) {
    next(err);
  }
};

export default { browse, read };
