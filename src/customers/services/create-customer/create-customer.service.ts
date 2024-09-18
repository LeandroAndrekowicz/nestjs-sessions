import { Injectable } from "@nestjs/common";
import { CreateCustomerDto } from "src/customers/models/dtos/create-customer.dto";
import { CustomersJson } from "src/customers/models/jsons/customers.json";

@Injectable()
export class CreateCustomerService {
    constructor () {}

    async execute(customer : CreateCustomerDto) {
        const id : number = Number(CustomersJson.length);
        const createdAt : Date = new Date();

        CustomersJson.push({
            id,
            name: customer.name,
            email: customer.email,
            address: customer.address,
            createdAt,
            updatedAt: null
        });

        return {
            message: 'Sucesso ao criar usuario',
            customerId: id
        }
    }
}