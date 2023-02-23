/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Demo, DemoCreateDTO } from './entities'


@Injectable()
export class DemoService {
    constructor(
        @InjectRepository(Demo)
        private readonly demoRes: Repository<Demo>
    ) { }
    async findAll(): Promise<Demo[]> {
        const res = await this.demoRes.createQueryBuilder().getMany()
        return res
    }
    async create(body: DemoCreateDTO): Promise<Demo> {
        const newDemo = new Demo()
        newDemo.content = body.content
        const res = await this.demoRes.save(newDemo)
        return res
    }
}
