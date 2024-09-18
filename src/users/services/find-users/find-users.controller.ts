import { Controller, Get } from "@nestjs/common";
import { FindUsersService } from "./find-users.service";

@Controller('users')
export class FindUsersController {
    constructor (
        private readonly findUsersService: FindUsersService
    ) {}

    @Get('/find')
    async find() {
        return await this.findUsersService.execute();
    }
}