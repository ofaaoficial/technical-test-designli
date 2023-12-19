import { Receipt } from './receipt.dto';
import { Mail } from './mail.dto';
import { IsNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import {CommonHeaders} from "./common-headers.dto";

export class Ses {
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => Receipt)
  receipt: Receipt;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => Mail)
  mail: Mail;
}
