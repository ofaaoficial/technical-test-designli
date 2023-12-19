import { Action } from './action.dto';
import {
  DkimVerdict,
  DmarcVerdict,
  SpamVerdict,
  SpfVerdict,
  VirusVerdict,
} from './verficts.dto';
import {IsArray, IsNotEmpty, IsNumber, IsString, ValidateNested} from 'class-validator';

export class Receipt {
  @IsString()
  timestamp: string;

  @IsNumber()
  processingTimeMillis: number;

  @IsArray()
  recipients: string[];

  @IsNotEmpty()
  spamVerdict: SpamVerdict;

  @IsNotEmpty()
  virusVerdict: VirusVerdict;

  @IsNotEmpty()
  spfVerdict: SpfVerdict;

  @IsNotEmpty()
  dkimVerdict: DkimVerdict;

  @IsNotEmpty()
  dmarcVerdict: DmarcVerdict;

  @IsString()
  dmarcPolicy: string;

  @ValidateNested()
  action: Action;
}
