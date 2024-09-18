import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { UpdateCustomerDto } from "src/customers/models/dtos/update-customer.dto";
import { CustomersJson } from "src/customers/models/jsons/customers.json";

@Injectable()
export class UpdateCustomerService {
    constructor () {}

    async execute(customer : UpdateCustomerDto, customerId : number) {
        if(!Number(customerId)) {
            throw new BadRequestException(`Id ${customerId} inválido.`);
        }

        const existCustomer = CustomersJson.find((customer) => customer.id === customerId);

        if(!existCustomer) {
            throw new NotFoundException(`Cliente com id ${customerId} não existe.`);
        }

        existCustomer.name = customer.name ?? existCustomer.name;
        existCustomer.email = customer.email ?? existCustomer.email;
        existCustomer.address = customer.address ?? existCustomer.address;
        existCustomer.updatedAt = new Date();

        return {
            message: 'Sucesso ao atualizar usuario',
            customerId: customerId
        }
    }
}