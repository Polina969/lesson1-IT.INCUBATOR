"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVideoRouter = void 0;
const express_1 = __importDefault(require("express"));
const createVideoController_1 = require("../videos-module/createVideoController");
const db_1 = require("../db/db");
const createVideoController_2 = require("../videos-module/createVideoController");
const deleteVideoController_1 = require("../videos-module/deleteVideoController");
const utils_1 = require("../utils");
const getVideoRouter = (db) => {
    const videoRouter = express_1.default.Router();
    videoRouter.post("/videos", (req, res) => {
        const validationResult = (0, createVideoController_2.validateVideoData)(req.body);
        if (!validationResult.isValid) {
            res.status(400).json({ errors: validationResult.errors });
            return;
        }
        try {
            const createdVideo = createVideoController_1.createVideoController.createVideo(req.body.title, req.body.author, req.body.availableResolutions); // импорт к репозиторию
            res.status(201).json(createdVideo);
        }
        catch (error) {
            // Обработка ошибки
            console.error("Ошибка при создании видео:", error);
            res
                .status(400)
                .json({ message: "If the inputModel has incorrect values" });
        }
    });
    videoRouter.put("/videos/:id", (req, res) => {
        if (!req.body.title) {
            res.sendStatus(400);
            return;
        }
        const foundVideo = db.videos.find((c) => c.id === +req.params.id);
        if (!foundVideo) {
            res.sendStatus(404);
            return;
        }
        foundVideo.title = req.body.title;
        foundVideo.author = req.body.author;
        foundVideo.availableResolutions = req.body.availableResolutions;
        foundVideo.canBeDownloaded = req.body.canBeDownloaded;
        foundVideo.minAgeRestriction = req.body.minAgeRestriction;
        foundVideo.publicationDate = db_1.createdAt.toISOString();
        res.sendStatus(204);
    });
    videoRouter.delete("/testing/all-data", (req, res) => {
        deleteVideoController_1.deleteVideoController.deleteFulVideo(db);
        res.sendStatus(utils_1.HTTP_STATUSES.NO_CONTENT_204);
    });
    videoRouter.get("/videos", (req, res) => {
        const videosGET = db.videos; // получаем видео из бд
        res.status(200).json(videosGET);
    });
    videoRouter.get("/videos/:id", (req, res) => {
        const foundIDCourse = db.videos.find((p) => p.id === +req.params.id);
        const videosID = foundIDCourse; // получаем видео из бд
        res.status(200).json(videosID);
    });
    videoRouter.delete("/videos/:id", (req, res) => {
        db.videos = db.videos.filter((c) => c.id !== +req.params.id);
        res.sendStatus(204);
    });
    return videoRouter;
};
exports.getVideoRouter = getVideoRouter;
