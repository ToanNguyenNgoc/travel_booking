import { DemoModule } from './demo/demo.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { databaseConfig } from '../db/data-source';
import { UserModule } from './user/user.module';
import { AbilityModule } from './ability/ability.module';
import { APP_GUARD } from '@nestjs/core';
import { AbilitiesGuard } from './ability/abilities.guard';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return databaseConfig(configService)
      },
    }),
    UserModule,
    DemoModule,
    AbilityModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AbilitiesGuard
    }
  ],
})
export class AppModule { }
