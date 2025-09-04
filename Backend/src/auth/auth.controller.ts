import { Body, Controller, Post } from "@nestjs/common";
import { AuthServeice } from "./auth.service";
import { SignupDto } from "./dto/signup.dto";
import { LoginDto } from "./dto/login.dto";


@Controller('auth')
export class AuthController{
    constructor(private readonly authService: AuthServeice){};

    @Post('signup')
    async signUp(@Body() signupDto: SignupDto){
        const {userName, password, email} = signupDto;
        return this.authService.signup(userName, password, email);
    }

    @Post('login')
    async login(@Body() loginDto: LoginDto){
        const {password, email} = loginDto;
        return this.authService.login(email, password);
    }
}