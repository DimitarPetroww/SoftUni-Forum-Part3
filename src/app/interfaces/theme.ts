import { IPost } from "./post";
import { IUser } from "./user";

export interface ITheme {
    _id: string
    subscribers: string[]  
    themeName: string,
    posts: IPost[]
    userId: IUser
    created_at: string
    updatedAt: string,
    __v: number
}