import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { UsersJson } from "src/users/models/jsons/users.json";

@Injectable()
export class FindUserByIdService {
    constructor () {}

    async execute(userId : number) {
        if(!Number(userId)) {
            throw new BadRequestException(`Id ${userId} inválido.`);
        }

        const user = UsersJson.find(user => user.id === userId);

        if(!user) {
            throw new NotFoundException(`Usuario com id ${userId} não encontrado.`);
        }

        return {
            message: 'Sucesso ao buscar usuario por Id.',
            user: {
                id: user.id,
                username: user.username,
            }
        }
    }
}