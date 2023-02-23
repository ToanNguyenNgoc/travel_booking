import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { DataSourceOptions, DataSource } from 'typeorm'
import { DotEnvConfigService } from "../src/configs"

const dotConfigService = new DotEnvConfigService()
export const databaseConfig: TypeOrmModuleOptions = {
    type: dotConfigService.get('TYPEORM_TYPE') as any,
    host: dotConfigService.get('TYPEORM_HOST'),
    port: dotConfigService.get('TYPEORM_PORT') as any,
    username: dotConfigService.get('TYPEORM_USERNAME'),
    password: dotConfigService.get('TYPEORM_PASSWORD'),
    database: dotConfigService.get('TYPEORM_DATABASE'),
    ssl: dotConfigService.get('TYPEORM_SSL'),

    synchronize: true,
    autoLoadEntities: true,
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/db/migrations/*.js'],
}

const dataSource = new DataSource(databaseConfig as DataSourceOptions)
export default dataSource