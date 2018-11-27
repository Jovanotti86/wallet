import * as express from 'express';


export interface Ijwt {
    access: string,
    token: string
};

export interface IUser  {
    _id: any,
    email: string,
    password: string
};

export interface IRequest extends express.Request {
    user?: any;
}