"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setDB = exports.db = exports.publicationDate = exports.createdAt = void 0;
const video_db_type_1 = require("../types/video-db-type");
exports.createdAt = new Date();
exports.publicationDate = new Date();
// publicationDate.setDate(createdAt.getDate() + 1);
exports.db = {
    videos: [
        {
            id: 1,
            title: "VideoCotik",
            author: "CotoMama",
            canBeDownloaded: false,
            minAgeRestriction: null,
            createdAt: "2025-01-09T01:32:13.176Z",
            publicationDate: "2025-01-10T01:32:13.176Z",
            availableResolutions: [video_db_type_1.Resolutions.P144],
        },
        {
            id: 2,
            title: "VideoDog",
            author: "DogoMama",
            canBeDownloaded: false,
            minAgeRestriction: null,
            createdAt: "2024-01-09T01:32:13.176Z",
            publicationDate: "2024-01-10T01:32:13.176Z",
            availableResolutions: [video_db_type_1.Resolutions.P144],
        },
    ],
};
// функция для быстрой очистки/заполнения базы данных для тестов
const setDB = (dataset) => {
    if (!dataset) {
        // если в функцию ничего не передано - то очищаем базу данных
        exports.db.videos = [];
        // db.some = []
        return;
    }
    // если чnо-то передано - то заменяем старые значения новыми
    exports.db.videos = dataset.videos || exports.db.videos;
    // db.some = dataset.some || db.some
};
exports.setDB = setDB;
