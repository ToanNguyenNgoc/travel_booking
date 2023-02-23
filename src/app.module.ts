import { DemoModule } from './demo/demo.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from '../db/data-source';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DotEnvConfigModule } from './configs'

@Module({
  imports: [
    DemoModule,
    DotEnvConfigModule,
    TypeOrmModule.forRoot(databaseConfig)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
