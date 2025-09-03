import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";


export class LoginDto{
    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    password: string;

    @IsNotEmpty()
    @IsEmail()
    @IsString()
    email: string;
}