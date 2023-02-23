import { DemoModule } from './demo/demo.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
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
        return {
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
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
