import { DemoModule } from './demo/demo.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { databaseConfig } from '../db/data-source';
import { UserModule } from './user/user.module';
import { AbilityModule } from './ability/ability.module';
import { APP_GUARD } from '@nestjs/core';
import { AbilitiesGuard } from './ability/abilities.guard';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          // type: configService.get('TYPEORM_TYPE') as any,
          // host: configService.get('TYPEORM_HOST') as any,
          // port: configService.get('TYPEORM_PORT') as any,
          // username: configService.get('TYPEORM_USERNAME'),
          // password: configService.get('TYPEORM_PASSWORD') as any,
          // database: configService.get('TYPEORM_DATABASE') as any,
          // ssl: configService.get('TYPEORM_SSL'),
          type:'postgres',
          host:'ep-fancy-cloud-261497.ap-southeast-1.aws.neon.tech',
          port:5432,
          username:'5751071044',
          password:'1qjDGJ6EtFCS',
          database:'neondb',
          synchronize: true,
          ssl:true,
          autoLoadEntities: true,
          entities: ['dist/**/*.entity.js'],
          migrations: ['dist/db/migrations/*.js'],
        }
      },
    }),
    UserModule,
    DemoModule,
    AbilityModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AbilitiesGuard
    }
  ],
})
export class AppModule { }
