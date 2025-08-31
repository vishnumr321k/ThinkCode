import { Body, Controller , Get, Post} from "@nestjs/common";
import { UserSchema } from "./user.schema";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/user-create.dto";


@Controller('user')
export class UserController{
    constructor(private readonly UserService: UserService){}

    @Post('create')
    createUser(@Body() createUserDto: CreateUserDto){
        return this.UserService.createUser(createUserDto);  
    };
};