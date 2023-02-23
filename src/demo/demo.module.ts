import { DemoController } from './demo.controller';
import { DemoService } from './demo.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Demo } from './entities/demo.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Demo])
    ],
    controllers: [
        DemoController,],
    providers: [
        DemoService,],
})
export class DemoModule { }
