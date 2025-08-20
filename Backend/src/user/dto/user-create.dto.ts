import { IsNotEmpty, IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'Username is requird' })
  userName: string;

  @IsString()
  @IsNotEmpty({ message: 'Password is required...🤨' })
  @MinLength(6, { message: 'Password must be at least 6 characters long...🥲' })
  password: string;

  @IsString()
  @IsNotEmpty({ message: 'Email is required...🤨' })
  @IsEmail({}, { message: 'Invalid email format...🫡' })
  email: string;
}
