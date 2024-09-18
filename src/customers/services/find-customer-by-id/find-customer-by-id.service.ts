import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { CustomersJson } from "src/customers/models/jsons/customers.json";

@Injectable()
export class FindCustomerByIdService {
    constructor () {}

    async execute(customerId : number) {
        if(!Number(customerId)){
            throw new BadRequestException(`Id ${customerId} inválido.`);
        }

        const haveCustomer = CustomersJson.find((customer) => customer.id === customerId)

        if(!haveCustomer) {
            throw new NotFoundException(`Não possui cliente com id ${customerId}.`);
        }

        return haveCustomer;
    }
}