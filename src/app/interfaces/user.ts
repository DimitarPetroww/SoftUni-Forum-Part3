import { IPost } from "./post";

export interface IUser {
    _id: string
    themes: string[]
    posts: IPost[]
    tel: string
    email: string
    username: string
    password: string
    created_at: string
    updatedAt: string
    __v: number
}