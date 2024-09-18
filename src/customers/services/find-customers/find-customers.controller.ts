import { Controller, Get } from '@nestjs/common';
import { FindCustomersService } from './find-customers.service';

@Controller('customers')
export class FindCustomersController {
    constructor (
        private readonly findCustomersService : FindCustomersService
    ) {}

    @Get('/find')
    async findCustomers() {
        return await this.findCustomersService.execute();
    }
} 
