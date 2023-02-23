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
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
