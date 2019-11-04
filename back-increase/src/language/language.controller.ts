import { Controller, Get } from '@nestjs/common';
import { LanguageService } from './language.service';
import { Language } from './language.entity';

@Controller('language')
export class LanguageController {
  constructor(private readonly languageService: LanguageService) { }

  @Get()
  findAll(): Promise<Language[]> {
    return this.languageService.findAll();
  }
}