import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { DataSourceOptions, DataSource } from 'typeorm'

export const databaseConfig: TypeOrmModuleOptions = {
    // type: dotConfigService.get('TYPEORM_TYPE') as any,
    // host: dotConfigService.get('TYPEORM_HOST'),
    // port: dotConfigService.get('TYPEORM_PORT') as any,
    // username: dotConfigService.get('TYPEORM_USERNAME'),
    // password: dotConfigService.get('TYPEORM_PASSWORD'),
    // database: dotConfigService.get('TYPEORM_DATABASE'),
    // ssl: dotConfigService.get('TYPEORM_SSL'),
    type: 'postgres',
    host: 'ep-fancy-cloud-261497.ap-southeast-1.aws.neon.tech',
    port: 5432,
    username: '5751071044',
    password: '1qjDGJ6EtFCS',
    database: 'neondb',
    ssl: true,

    synchronize: true,
    autoLoadEntities: true,
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/db/migrations/*.js'],
}

const dataSource = new DataSource(databaseConfig as DataSourceOptions)
export default dataSource