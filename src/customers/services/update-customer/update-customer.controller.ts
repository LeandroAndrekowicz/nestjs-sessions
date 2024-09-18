import { Body, Controller, Param, Patch } from "@nestjs/common";
import { UpdateCustomerService } from "./update-customer.service";
import { UpdateCustomerDto } from "src/customers/models/dtos/update-customer.dto";

@Controller('customers')
export class UpdateCustomerController {
    constructor (
        private readonly updateCustomerService: UpdateCustomerService
    ) {}

    @Patch('/update/:customerId')
    async update(
        @Body() customer : UpdateCustomerDto,
        @Param('customerId') customerId : number
    ) {
        return await this.updateCustomerService.execute(customer, customerId);
    }
}