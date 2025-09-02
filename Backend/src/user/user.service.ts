import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.schema';
import { Model } from 'mongoose';
import { emit } from 'process';
import { CreateUserDto } from './dto/user-create.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async createUser(dto: CreateUserDto): Promise<User> {
    // Checking user is already exit or not;
    const userExist = await this.userModel.findOne({ email: dto.email });
    if (userExist) {
      throw new BadRequestException('The user is alredy Exist...😶‍🌫️');
    }

    // if the user is not in the db we can create one;
    const user = await this.userModel.create(dto);
    return user.save();
  }

  async findByEmailUser(email: string) {
    const user = await this.userModel.findOne({ email });
    if (!user) {
      throw new UnauthorizedException('The User is not there...🥲');
    }

    return user;
  }
}
