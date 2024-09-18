import { Module } from '@nestjs/common';
import { FindCustomersController } from './services/find-customers/find-customers.controller';
import { FindCustomersService } from './services/find-customers/find-customers.service';
import { FindCustomerByIdController } from './services/find-customer-by-id/find-customer-by-id.controller';
import { FindCustomerByIdService } from './services/find-customer-by-id/find-customer-by-id.service';
import { CreateCustomerController } from './services/create-customer/create-customer.controller';
import { CreateCustomerService } from './services/create-customer/create-customer.service';
import { UpdateCustomerController } from './services/update-customer/update-customer.controller';
import { UpdateCustomerService } from './services/update-customer/update-customer.service';

@Module({
  controllers: [
    FindCustomersController,
    FindCustomerByIdController,
    CreateCustomerController,
    UpdateCustomerController
  ],
  providers: [
    FindCustomersService,
    FindCustomerByIdService,
    CreateCustomerService,
    UpdateCustomerService
  ]
})
export class CustomersModule {}
