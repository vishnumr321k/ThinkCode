import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { UserModule } from "src/user/user.module";
import { AuthController } from "./auth.controller";
import { AuthServeice } from "./auth.service";
import { UserService } from "src/user/user.service";
import { JwtStrategy } from "./jwt.startegy";

@Module({
    imports: [
        UserModule,
        PassportModule,
        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async(configService: ConfigService) => ({
                secret: configService.get<string>('JWT_SECRET'),
                signOptions: {
                    expiresIn: configService.get<string>('JWT_EXPIRES_IN'),
                }
            })
        })
    ],
    controllers:[AuthController],
    providers:[AuthServeice, JwtStrategy],
    exports: [AuthServeice],
})

export class AuthModule{};