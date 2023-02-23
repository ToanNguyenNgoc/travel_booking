import { DemoModule } from './demo/demo.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from '../db/data-source';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    DemoModule,
    TypeOrmModule.forRoot(databaseConfig)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
