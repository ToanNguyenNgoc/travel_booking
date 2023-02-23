import { DataSourceOptions, DataSource } from 'typeorm'
// import { ConfigService } from 'nestjs-dotenv'

// const dotConfig = new ConfigService()
export const databaseConfig = (configService) => {
    return {
        // type: configService.get('TYPEORM_TYPE') as any,
        // host: configService.get('TYPEORM_HOST') as any,
        // port: configService.get('TYPEORM_PORT') as any,
        // username: configService.get('TYPEORM_USERNAME'),
        // password: configService.get('TYPEORM_PASSWORD') as any,
        // database: configService.get('TYPEORM_DATABASE') as any,
        // ssl: configService.get('TYPEORM_SSL'),

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
}

// const dataSource = new DataSource(databaseConfig(dotConfig) as DataSourceOptions)
// export default dataSource