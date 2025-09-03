import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthServeice {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signup(userName: string, password: string, email: string) {
    const hashPassword = await bcrypt.hash(password, 10);
    if (!hashPassword) {
      throw new Error('The password is not hear...🫡');
    }

    const user = await this.userService.createUser({
      userName,
      password: hashPassword,
      email,
    });
    return user;
  }


  async login(email: string, password: string){
    console.log('Endha mone nane auth service login inde...')
    const user = await this.userService.findByEmailUser(email);
    console.log('user', user);
    if(!user){
        throw new UnauthorizedException('Your email is incorrect or the user is not exit....😶‍🌫️');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if(!isPasswordValid){
        throw new UnauthorizedException('The password is incorect...😤');
    }

    const payload = {sub: user._id, email: user.email};
    return {
        access_token: this.jwtService.sign(payload),
    };
  }
}
