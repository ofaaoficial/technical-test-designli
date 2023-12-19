import { Module } from '@nestjs/common';
import { SesSnsEventController } from './infraestructure/api/handlers/ses-sns-event.controller';
import { SesSnsEventFactoryImpl } from './application/factory/ses-sns-event-factory-impl';
import { MapperUseCaseImpl } from './application/use-cases/mapper-use-case-impl';
import { SesSnsEventFactory } from './domain/services/ses-sns-event-factory.interface';
import { MapperUseCase } from './domain/use-cases/mapper-use-case.interface';
import { MailParserController } from './infraestructure/api/handlers/mail-parser.controller';
import { MailServiceImpl } from './application/services/mail.service';
import { MailService } from './domain/services/mail-service.interface';
import { ParseUseCase } from './domain/use-cases/parse-use-case.interface';
import { ParseUseCaseImpl } from './application/use-cases/parse.use-case-impl';

@Module({
  controllers: [SesSnsEventController, MailParserController],
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
    {
      provide: ParseUseCase,
      useClass: ParseUseCaseImpl,
    },
    {
      provide: MailService,
      useClass: MailServiceImpl,
    },
  ],
})
export class AppModule {}
