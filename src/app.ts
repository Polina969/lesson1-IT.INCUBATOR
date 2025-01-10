import express from "express";
import cors from "cors";
import { db, DBType } from "./db/db";
import { createItemClient } from "./types/video-db-type";
import {
  createVideoController,
  VideoViewModel,
} from "./videos-module/createVideoController";
import { createdAt } from "./db/db";
import { getVideoRouter } from "./router/videos";

export const PORT = 4000;

export const app = express(); // создать приложение
app.use(express.json()); // создание свойств-объектов body и query во всех реквестах
app.use(cors()); // разрешить любым фронтам делать запросы на наш бэк
app.use("/hometask_01/api", getVideoRouter(db));

// app.delete("${baseURL}/testing/all-data", (req, res) => {
//   db.videos = [];
//   res.sendStatus(204);
// });
// app.get("/hometask_01/api/videos", (req, res) => {
//   const videosGET = db.videos; // получаем видео из бд
//   res.status(200).json(videosGET);
// });
// app.post("/hometask_01/api/videos", (req, res) => {
//   try {
//     const createdVideo: VideoViewModel = createVideoController.createVideo(
//       req.body.title,
//       req.body.author,
//       req.body.availableResolutions
//     ); // импорт к репозиторию
//     res.status(201).json(createdVideo);
//   } catch (error) {
//     // Обработка ошибки
//     console.error("Ошибка при создании видео:", error);
//     res.status(400).json({ message: "If the inputModel has incorrect values" });
//   }
// });
// app.get("/hometask_01/api/videos/:id", (req, res) => {
//   const foundIDCourse = db.videos.find((p) => p.id === +req.params.id);
//   const videosID = foundIDCourse; // получаем видео из бд
//   res.status(200).json(videosID);
// });
// app.put("/hometask_01/api/videos/:id", (req, res) => {
//   if (!req.body.title) {
//     res.sendStatus(400);
//     return;
//   }

//   const foundVideo = db.videos.find((c) => c.id === +req.params.id);
//   if (!foundVideo) {
//     res.sendStatus(404);
//     return;
//   }

//   foundVideo.title = req.body.title;
//   foundVideo.author = req.body.author;
//   foundVideo.availableResolutions = req.body.availableResolutions;
//   foundVideo.canBeDownloaded = req.body.canBeDownloaded;
//   foundVideo.minAgeRestriction = req.body.minAgeRestriction;
//   foundVideo.publicationDate = createdAt.toISOString();

//   res.sendStatus(204);
// });
// app.delete("/hometask_01/api/videos/:id", (req, res) => {
//   db.videos = db.videos.filter((c) => c.id !== +req.params.id);
//   res.sendStatus(204);
// });
////

app.get("/", (req, res) => {
  // эндпоинт, который будет показывать на верселе какая версия бэкэнда сейчас залита
  res.status(200).json({ version: "1.0" });
});

// app.get(SETTINGS.PATH.VIDEOS, getVideosController)
// app.use(SETTINGS.PATH.VIDEOS, videosRouter)
