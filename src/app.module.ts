import { Module } from '@nestjs/common';
import { SesSnsEventController } from './infraestructure/api/handlers/sesSnsEventController';
import { MapperUseCase } from './application/useCases/mapper.useCase';
import { SesSnsEventFactory } from './application/factory/sesSnsEvent.factory';

@Module({
  imports: [],
  controllers: [SesSnsEventController],
  providers: [MapperUseCase, SesSnsEventFactory],
})
export class AppModule {}
