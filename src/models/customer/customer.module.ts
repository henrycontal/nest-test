import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerService } from './customer.service';
import { Customer, CustomerSchema } from './schemas/customer.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Customer.name, schema: CustomerSchema },
        ]),
    ],
    providers: [CustomerService],
})
export class CustomerModule {}