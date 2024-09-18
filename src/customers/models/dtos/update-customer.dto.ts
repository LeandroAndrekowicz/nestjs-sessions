import { IsEmail, IsOptional, IsString } from "class-validator";

export class UpdateCustomerDto {
    @IsOptional()
    @IsString({message: 'O nome do cliente deve ser uma string.'})
    name: string;

    @IsOptional()
    @IsEmail({}, {message: 'O email do cliente deve ser no formato cliente@cliente.com'})
    email: string;

    @IsOptional()
    @IsString({message: 'O endereço do cliente deve ser uma string.'})
    address: string;
}