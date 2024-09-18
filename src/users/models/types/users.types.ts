import { Exclude } from "class-transformer";

export type UsersType = {
    id: number;
    username: string;
    password: string;
}

export class SerializedUsers {
    id: number;
    username: string;

    @Exclude()
    password: string;
}