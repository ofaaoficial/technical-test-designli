import { Ses } from '../entities/ses.dto';
import { IsNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class SesSnsEventRequest {
  @IsNotEmpty({ each: true })
  @ValidateNested({ each: true })
  @Type(() => Record)
  Records: Record[];
}

export class Record {
  @IsNotEmpty()
  eventVersion: string;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => Ses)
  ses: Ses;

  @IsNotEmpty()
  eventSource: string;
}
