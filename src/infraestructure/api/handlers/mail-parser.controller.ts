import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { ParseUseCase } from '../../../domain/use-cases/parse-use-case.interface';

@Controller('mailer')
export class MailParserController {
  constructor(private readonly parseUseCase: ParseUseCase) {}

  @Get('parse')
  async parser(@Query('path') path: string) {
    try {
      if (!path) {
        throw new BadRequestException('El parámetro "path" es requerido');
      }
      return await this.parseUseCase.handler(path);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
