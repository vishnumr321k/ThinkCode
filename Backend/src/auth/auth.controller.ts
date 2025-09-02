import { Body, Controller, Post } from "@nestjs/common";
import { AuthServeice } from "./auth.service";

@Controller('auth')
export class AuthController{
    constructor(private readonly authService: AuthServeice){};

    @Post('signup')
    signUp( ){

    }

    @Post('login')
    login(){

    }
}