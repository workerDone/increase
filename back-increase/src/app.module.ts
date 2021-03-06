import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';


import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { LanguageModule } from './language/language.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..','..', 'front-increase', 'dist', 'front-increase'),
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      // host: "db4free.net",
      // username: "mykola_chmut",
      // password: "mykola_chmut",
      // database: 'mykola_chmut',
      // entities: [__dirname + '/**/*.entity{.ts,.js}'],
      // synchronize: true
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'test',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      insecureAuth : true,
    }),
    UserModule,
    LanguageModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
