import { Request, Response } from "express";

export type ParamType = {
  id: string;
};

export type BodyType = {
  id: number;
  title: string;
  // ...
};

export type QueryType = {
  search?: string;
};

export type OutputType = void; /*| OutputErrorsType | OutputVideoType*/
export type OutputVideoType = {
  id: number | string;
  title: string;
  author: string;
  canBeDownloaded: true;
  minAgeRestriction: null;
  createdAt: string;
  publicationDate: string;
  availableResolutions: any;
};
export const someController = (
  req: Request<ParamType, OutputType, BodyType, QueryType>,
  res: Response<OutputType>
) => {};
