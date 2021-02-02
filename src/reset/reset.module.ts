import {Module} from '@nestjs/common';
import {ResetService} from './reset.service';
import {ResetController} from './reset.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ResetEntity} from "./reset.entity";
import {MailerModule} from "@nestjs-modules/mailer";
import {AuthModule} from "../auth/auth.module";

@Module({
    imports: [
        TypeOrmModule.forFeature([ResetEntity]),
        MailerModule.forRoot({
            transport: {
                host: 'localhost',
                port: 1025
            },
            defaults: {
                from: 'no-replay@localhost.com'
            }
        }),
        AuthModule
    ],
    providers: [ResetService],
    controllers: [ResetController]
})
export class ResetModule {
}
