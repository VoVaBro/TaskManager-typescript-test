import { Request, Response } from 'express';
export declare const getTasks: (req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response) => Promise<Response | undefined>;
export declare const createTask: (req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response) => Promise<Response | undefined>;
export declare const getMostPriorityTask: (req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response) => Promise<Response | undefined>;
export declare const deleteTask: (req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response) => Promise<Response | undefined>;
