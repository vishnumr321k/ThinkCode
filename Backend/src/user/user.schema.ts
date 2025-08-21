import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type UserDocument = HydratedDocument<User>;

export enum UserRole{
    ADMIN = 'admin',
    USER = 'user'
}

@Schema({timestamps: true})
export class User{
    @Prop({required: true})
    userName: string;

    @Prop({required: true})
    password: string;

    @Prop({required: true, unique: true, lowercase: true, trim: true})
    email: string;

    @Prop({type: String, enum: UserRole, default: UserRole.USER})
    role: UserRole;
}

export const UserSchema = SchemaFactory.createForClass(User);