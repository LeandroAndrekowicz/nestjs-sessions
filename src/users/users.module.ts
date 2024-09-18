import { Module } from '@nestjs/common';
import { FindUsersController } from './services/find-users/find-users.controller';
import { FindUsersService } from './services/find-users/find-users.service';
import { FindUserByIdController } from './services/find-user-by-id/find-user-by-id.controller';
import { FindUserByIdService } from './services/find-user-by-id/find-user-by-id.service';

@Module({
    controllers: [
        FindUsersController,
        FindUserByIdController
    ],
    providers: [
        FindUsersService,
        FindUserByIdService
    ],
})
export class UsersModule {}
