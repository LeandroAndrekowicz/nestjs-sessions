import { Controller, Get, Param } from "@nestjs/common";
import { FindCustomerByIdService } from "./find-customer-by-id.service";

@Controller('customers')
export class FindCustomerByIdController {
    constructor (
        private readonly findCustomerByIdService: FindCustomerByIdService
    ) {}

    @Get('/find/by-id/:customerId')
    async findById(
        @Param('customerId') customerId: number
    ) {
        return await this.findCustomerByIdService.execute(customerId);
    }
}