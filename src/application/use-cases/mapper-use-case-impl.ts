import { Injectable } from '@nestjs/common';
import { SesSnsEventFactory } from '../../domain/services/ses-sns-event-factory.interface';
import { SesSnsEventRequest } from '../../infraestructure/api/dtos/requests/ses-sns-event.request';
import { SesSnsEvent } from '../../domain/ses-sns-event.entity';

@Injectable()
export class MapperUseCaseImpl {
  constructor(private sesSnsEventFactory: SesSnsEventFactory) {}

  handler(sesSnsEventRequest: SesSnsEventRequest): SesSnsEvent {
    return this.sesSnsEventFactory.createSesSnsEvent(sesSnsEventRequest);
  }
}
