import express, { Response, Request } from "express";
import { Resolutions, VideoDBType } from "../types/video-db-type";
import { db, createdAt, publicationDate } from "../db/db";

export type VideoViewModel = {
  id: number | string;
  title: string;
  availableResolutions: Resolutions[] | null;
};

export const createVideoController = {
  createVideo(
    title: string,
    author: string,
    availableResolutions: Resolutions[] | null
  ): VideoDBType {
    const createdVideos = {
      id: +new Date(),
      title: title,
      author: author,
      canBeDownloaded: false,
      minAgeRestriction: null,
      createdAt: createdAt.toISOString(),
      publicationDate: publicationDate.toISOString(),
      availableResolutions: availableResolutions,
    };

    db.videos.push(createdVideos);
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
