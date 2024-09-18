import { Injectable } from '@nestjs/common';
import { CustomersJson } from 'src/customers/models/jsons/customers.json';

@Injectable()
export class FindCustomersService {
    constructor() {}

    async execute() {
        return CustomersJson.map((customer) => {
            return customer;
        })
    }
}
