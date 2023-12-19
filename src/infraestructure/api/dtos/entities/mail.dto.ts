import { Header } from './header.dto';
import { CommonHeaders } from './common-headers.dto';
import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class Mail {
  @IsNotEmpty()
  @IsDateString()
  timestamp: string;

  @IsNotEmpty()
  @IsString()
  source: string;

  @IsNotEmpty()
  @IsString()
  messageId: string;

  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true })
  destination: string[];

  @IsNotEmpty()
  @IsBoolean()
  headersTruncated: boolean;

  @ValidateNested({ each: true })
  @Type(() => Header)
  headers: Header[];

  @ValidateNested()
  @Type(() => CommonHeaders)
  commonHeaders: CommonHeaders;
}
