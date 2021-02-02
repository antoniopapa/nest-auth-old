import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {AuthModule} from './auth/auth.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ResetModule} from './reset/reset.module';
import {ConfigModule} from "@nestjs/config";

@Module({
    imports: [
        ConfigModule.forRoot({isGlobal: true}),
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'rootroot',
            database: 'nest_auth',
            autoLoadEntities: true,
            synchronize: true,
        }),

        AuthModule,
        ResetModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
