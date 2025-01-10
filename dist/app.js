"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = exports.PORT = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const db_1 = require("./db/db");
const videos_1 = require("./router/videos");
exports.PORT = 4000;
exports.app = (0, express_1.default)(); // создать приложение
exports.app.use(express_1.default.json()); // создание свойств-объектов body и query во всех реквестах
exports.app.use((0, cors_1.default)()); // разрешить любым фронтам делать запросы на наш бэк
exports.app.use("/hometask_01/api", (0, videos_1.getVideoRouter)(db_1.db));
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
exports.app.get("/", (req, res) => {
    // эндпоинт, который будет показывать на верселе какая версия бэкэнда сейчас залита
    res.status(200).json({ version: "1.0" });
});
// app.get(SETTINGS.PATH.VIDEOS, getVideosController)
// app.use(SETTINGS.PATH.VIDEOS, videosRouter)
