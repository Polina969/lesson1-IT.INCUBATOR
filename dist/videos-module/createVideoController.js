"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createVideoController = void 0;
exports.validateVideoData = validateVideoData;
const video_db_type_1 = require("../types/video-db-type");
const db_1 = require("../db/db");
function validateVideoData(data) {
    const errors = [];
    // 1. Валидация title
    if (!data || !data.title) {
        errors.push("Поле 'title' обязательно для заполнения.");
    }
    else if (typeof data.title !== "string") {
        errors.push("Поле 'title' должно быть строкой.");
    }
    else if (data.title.trim() === "") {
        errors.push("Поле 'title' не может быть пустой строкой.");
    }
    else if (data.title.length < 3 || data.title.length > 40) {
        errors.push("Длина поля 'title' должна быть от 3 до 10 символов.");
    }
    // 2. Валидация author
    if (!data || !data.author) {
        errors.push("Поле 'author' обязательно для заполнения.");
    }
    else if (typeof data.author !== "string") {
        errors.push("Поле 'author' должно быть строкой.");
    }
    else if (data.author.trim() === "") {
        errors.push("Поле 'author' не может быть пустой строкой.");
    }
    else if (data.author.length < 3 || data.author.length > 20) {
        errors.push("Длина поля 'author' должна быть от 3 до 20 символов.");
    }
    // 3. Валидация availableResolutions
    if (data.availableResolutions !== null &&
        data.availableResolutions !== undefined) {
        if (!Array.isArray(data.availableResolutions)) {
            errors.push("Поле 'availableResolutions' должно быть массивом или null.");
        }
        else {
            for (const resolution of data.availableResolutions) {
                if (!Object.values(video_db_type_1.Resolutions).includes(resolution)) {
                    errors.push(`Значение '${resolution}' в массиве 'availableResolutions' недопустимо. Допустимые значения: ${Object.values(video_db_type_1.Resolutions).join(", ")}`);
                }
            }
        }
    }
    return {
        isValid: errors.length === 0,
        errors: errors,
    };
}
exports.createVideoController = {
    createVideo(title, author, availableResolutions) {
        const createdVideos = {
            id: +new Date(),
            title: title,
            author: author,
            canBeDownloaded: false,
            minAgeRestriction: null,
            createdAt: db_1.createdAt.toISOString(),
            publicationDate: db_1.publicationDate.toISOString(),
            availableResolutions: availableResolutions,
        };
        db_1.db.videos.push(createdVideos);
        return createdVideos;
    },
};
// const inputValidation = (video: InputVideoType) => {
//     const errors: OutputErrorsType = { // объект для сбора ошибок
//         errorsMessages: []
//     }
// // ...
//     if (!Array.isArray(video.availableResolution)
//         || video.availableResolution.find(p => !Resolutions[p])
//     ) {
//         errors.errorsMessages.push({
//             message: 'error!!!!', field: 'availableResolution'
//         })
//     }
//     return errors
// }
// export const createVideoController = (req: Request<any, any, InputVideoType>, res: Response<any /*OutputVideoType*/ | OutputErrorsType>) => {
//     const errors = inputValidation(req.body)
//     if (errors.errorsMessages.length) { // если есть ошибки - отправляем ошибки
//         res
//             .status(400)
//             .json(errors)
//         return
//     }
//     // если всё ок - добавляем видео
//     const newVideo: any /*VideoDBType*/ = {
//         ...req.body,
//         id: Date.now() + Math.random(),
//         // ...
//     }
//     db.videos = [...db.videos, newVideo]
//     res
//         .status(201)
//         .json(newVideo)
// }
