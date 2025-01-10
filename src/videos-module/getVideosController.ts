import express, { Request, Response } from "express";
import { db } from "../db/db";
import { ParamType } from "./some";
import { OutputType } from "./some";
import { OutputVideoType } from "./some";

export const getVideosController = (
  req: Request,
  res: Response<OutputVideoType[]>
) => {
  const getVideosRouter = express.Router();
  const videosG = db.videos; // получаем видео из базы данных

  return videosG; // отдаём видео в качестве ответа
};

// не забудьте добавить эндпоинт в апп
