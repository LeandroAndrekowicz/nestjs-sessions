import { Injectable } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { UsersJson } from "src/users/models/jsons/users.json";
import { SerializedUsers } from "src/users/models/types/users.types";

@Injectable()
export class FindUsersService {
    constructor () {}

    async execute() {
        return UsersJson.map((user) => {
            plainToClass(SerializedUsers, user);
        })
    }
}