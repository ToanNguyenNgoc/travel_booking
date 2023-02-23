import { DemoModule } from './demo/demo.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from '../db/data-source';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    DemoModule,
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
