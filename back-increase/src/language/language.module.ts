import { Module } from '@nestjs/common';
import { LanguageService } from './language.service';
import { LanguageController } from './language.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Language } from './language.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Language])],
  providers: [LanguageService],
  controllers: [LanguageController],
})
export class LanguageModule {}