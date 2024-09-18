import { Controller, Get, Param } from "@nestjs/common";
import { FindUserByIdService } from "./find-user-by-id.service";

@Controller('users')
export class FindUserByIdController {
    constructor (
        private readonly findUserByIdService: FindUserByIdService
    ) {}

    @Get('/find/by-id/:userId')
    async findById(
        @Param('userId') userId: number
    ) {
        return await this.findUserByIdService.execute(userId);
    }
}