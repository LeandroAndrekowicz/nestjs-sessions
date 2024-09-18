import { Body, Controller, Post } from "@nestjs/common";
import { CreateCustomerService } from "./create-customer.service";
import { CreateCustomerDto } from "src/customers/models/dtos/create-customer.dto";

@Controller('customers')
export class CreateCustomerController {
    constructor(
        private readonly createCustomerService: CreateCustomerService
    ) {}

    @Post('/create')
    async create(
        @Body() customer : CreateCustomerDto
    ) {
        return await this.createCustomerService.execute(customer);
    }
}