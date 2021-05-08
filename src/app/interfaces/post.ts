import { ITheme } from "./theme";
import { IUser } from "./user";

export interface IPost {
    _id: string
    likes: string[],
    text: string
    userId: IUser,
    themeId: ITheme
    created_at: string
    updatedAt: string
    __v: number
}