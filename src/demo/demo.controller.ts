/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Post } from '@nestjs/common';
import { DemoService } from './demo.service';
import { DemoCreateDTO } from './entities'

@Controller('demo')
export class DemoController {
    constructor(
        private readonly demoService: DemoService
    ) { }
    @Get()
    getAll() {
        return this.demoService.findAll()
    }
    @Post()
    postDemo(@Body() body: DemoCreateDTO) {
        return this.demoService.create(body)
    }

}
