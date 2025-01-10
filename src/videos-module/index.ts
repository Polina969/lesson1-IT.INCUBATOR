import { config } from "dotenv";
import { app, PORT } from "../app";
import { Router } from "express";
import { getVideosController } from "./getVideosController";
// import {createVideoController} from './createVideoController'
// import {findVideoController} from './findVideoController'
// import {deleteVideoController} from './deleteVideoController'
config(); // добавление переменных из файла .env в process.env

export const videosRouter = Router();

// videosRouter.get("/", getVideosController);
// videosRouter.post('/', createVideoController)
// videosRouter.get('/:id', findVideoController)
// videosRouter.delete('/:id', deleteVideoController)

export const SETTINGS = {
  // все хардкодные значения должны быть здесь, для удобства их изменения
  PORT: process.env.PORT || 3007,
  PATH: {
    VIDEOS: "/videos",
  },
};

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`);
});
