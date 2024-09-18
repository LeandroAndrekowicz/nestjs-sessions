import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateCustomerDto {
    @IsNotEmpty({message: 'O nome do cliente não pode ser nulo.'})
    @IsString({message: 'O nome do cliente deve ser uma string.'}) 
    name: string;

    @IsNotEmpty({message: 'O email do cliente não pode ser nulo.'})	
    @IsEmail({}, {message: 'O email do cliente deve estar ser no formato client@client.com'})
    email: string;

    @IsNotEmpty({message: 'O endereço do cliente não pode ser nulo.'})
    @IsString({message: 'O endereço do cliente deve ser uma string.'}) 
    address: string;
}