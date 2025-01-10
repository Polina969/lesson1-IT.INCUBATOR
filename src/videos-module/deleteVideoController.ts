import { db } from "../db/db";
import express from "express";
import { HTTP_STATUSES } from "../utils";
import { DBType } from "../db/db";

export const deleteVideoController = {
  deleteFulVideo(db: DBType): void {
    db.videos = [];
  },
};
