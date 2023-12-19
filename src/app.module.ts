import { Module } from '@nestjs/common';
import { SesSnsEventController } from './infraestructure/api/handlers/ses-sns-event.controller';
import { SesSnsEventFactoryImpl } from './application/factory/ses-sns-event-factory-impl';
import { MapperUseCaseImpl } from './application/use-cases/mapper-use-case-impl';
import { SesSnsEventFactory } from './domain/services/ses-sns-event-factory.interface';
import { MapperUseCase } from './domain/use-cases/mapper-use-case.interface';

@Module({
  controllers: [SesSnsEventController],
  imports: [],
  providers: [
    {
      provide: SesSnsEventFactory,
      useClass: SesSnsEventFactoryImpl,
    },
    {
      provide: MapperUseCase,
      useClass: MapperUseCaseImpl,
    },
  ],
})
export class AppModule {}
