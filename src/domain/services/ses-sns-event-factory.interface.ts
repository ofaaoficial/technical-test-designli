import { SesSnsEvent } from '../ses-sns-event.entity';
import { SesSnsEventRequest } from '../../infraestructure/api/dtos/requests/ses-sns-event.request';

export abstract class SesSnsEventFactory {
  abstract createSesSnsEvent(request: SesSnsEventRequest): SesSnsEvent;
}
