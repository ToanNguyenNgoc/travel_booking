// import { DataSourceOptions, DataSource } from 'typeorm'
// import { ConfigService } from 'nestjs-dotenv'

// const dotConfig = new ConfigService()
export const databaseConfig = (configService) => {
    return {
        type: configService.get('TYPEORM_TYPE') as any,
        host: configService.get('TYPEORM_HOST') as any,
        port: configService.get('TYPEORM_PORT') as any,
        username: configService.get('TYPEORM_USERNAME'),
        password: configService.get('TYPEORM_PASSWORD') as any,
        database: configService.get('TYPEORM_DATABASE') as any,
        ssl: configService.get('TYPEORM_SSL'),
        synchronize: true,
        autoLoadEntities: true,
        entities: ['dist/**/*.entity.js'],
        migrations: ['dist/db/migrations/*.js'],
    }
}

// const dataSource = new DataSource(databaseConfig(dotConfig) as DataSourceOptions)
// export default dataSource