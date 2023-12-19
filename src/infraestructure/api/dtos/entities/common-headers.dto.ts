import { IsArray, IsString } from 'class-validator';

export class CommonHeaders {
  @IsString()
  returnPath: string;

  @IsArray()
  @IsString({ each: true })
  from: string[];

  @IsString()
  date: string;

  @IsString({ each: true })
  to: string[];

  @IsString()
  messageId: string;

  @IsString()
  subject: string;
}
