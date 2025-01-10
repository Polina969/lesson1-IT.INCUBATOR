"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVideosController = void 0;
const express_1 = __importDefault(require("express"));
const db_1 = require("../db/db");
const getVideosController = (req, res) => {
    const getVideosRouter = express_1.default.Router();
    const videosG = db_1.db.videos; // получаем видео из базы данных
    return videosG; // отдаём видео в качестве ответа
};
exports.getVideosController = getVideosController;
// не забудьте добавить эндпоинт в апп
