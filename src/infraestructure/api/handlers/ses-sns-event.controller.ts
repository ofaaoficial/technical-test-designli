import { Body, Controller, Post } from '@nestjs/common';
import { SesSnsEventRequest } from '../dtos/requests/ses-sns-event.request';
import { MapperUseCase } from '../../../domain/use-cases/mapper-use-case.interface';

@Controller('ses-sns')
export class SesSnsEventController {
  constructor(private readonly mapperUseCase: MapperUseCase) {}

  @Post('mapper')
  mapper(@Body() sesSnsEventRequest: SesSnsEventRequest) {
    return this.mapperUseCase.handler(sesSnsEventRequest);
  }
}
