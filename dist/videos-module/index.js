"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SETTINGS = exports.videosRouter = void 0;
const dotenv_1 = require("dotenv");
const app_1 = require("../app");
const express_1 = require("express");
// import {createVideoController} from './createVideoController'
// import {findVideoController} from './findVideoController'
// import {deleteVideoController} from './deleteVideoController'
(0, dotenv_1.config)(); // добавление переменных из файла .env в process.env
exports.videosRouter = (0, express_1.Router)();
// videosRouter.get("/", getVideosController);
// videosRouter.post('/', createVideoController)
// videosRouter.get('/:id', findVideoController)
// videosRouter.delete('/:id', deleteVideoController)
exports.SETTINGS = {
    // все хардкодные значения должны быть здесь, для удобства их изменения
    PORT: process.env.PORT || 3007,
    PATH: {
        VIDEOS: "/videos",
    },
};
app_1.app.listen(app_1.PORT, () => {
    console.log(`Example app listening on port http://localhost:${app_1.PORT}`);
});
