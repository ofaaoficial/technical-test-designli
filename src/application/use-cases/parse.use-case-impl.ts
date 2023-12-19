import { Injectable } from '@nestjs/common';
import { MailService } from '../../domain/services/mail-service.interface';

@Injectable()
export class ParseUseCaseImpl {
  constructor(private readonly mailService: MailService) {}

  handler(pathOrUrl: string) {
    return this.mailService.parseEmail(pathOrUrl);
  }
}
