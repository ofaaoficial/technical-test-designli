import { BadRequestException, Injectable } from '@nestjs/common';
import { SesSnsEvent } from '../../domain/ses-sns-event.entity';
import {
  Record,
  SesSnsEventRequest,
} from '../../infraestructure/api/dtos/requests/ses-sns-event.request';

@Injectable()
export class SesSnsEventFactoryImpl {
  public createSesSnsEvent(
    sesSnsEventRequest: SesSnsEventRequest,
  ): SesSnsEvent {
    if (!sesSnsEventRequest || !sesSnsEventRequest.Records) {
      throw new BadRequestException('Invalid sesSnsEventRequest data');
    }

    return new SesSnsEvent(
      this.spam(sesSnsEventRequest),
      this.virus(sesSnsEventRequest),
      this.dns(sesSnsEventRequest),
      this.mes(sesSnsEventRequest),
      this.retrasado(sesSnsEventRequest),
      this.emisor(sesSnsEventRequest),
      this.receptor(sesSnsEventRequest),
    );
  }

  private spam(sesSnsEventRequest: SesSnsEventRequest): boolean {
    return sesSnsEventRequest.Records.every(
      (record: Record) => record.ses.receipt.spamVerdict.status === 'PASS',
    );
  }

  private virus(sesSnsEventRequest: SesSnsEventRequest): boolean {
    return sesSnsEventRequest.Records.every(
      (record: Record) => record.ses.receipt.virusVerdict.status === 'PASS',
    );
  }

  private dns(sesSnsEventRequest: SesSnsEventRequest): boolean {
    return sesSnsEventRequest.Records.every(
      (record: Record) =>
        record.ses.receipt.spfVerdict.status === 'PASS' &&
        record.ses.receipt.dkimVerdict.status === 'PASS' &&
        record.ses.receipt.dmarcVerdict.status === 'PASS',
    );
  }

  private convertTimestampToSpanishMonth(timestamp: string): string {
    const months = [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ];

    const date = new Date(timestamp);
    if (isNaN(date.getTime())) {
      throw new BadRequestException('Invalid timestamp format');
    }
    const monthIndex = date.getMonth();

    return months[monthIndex];
  }

  private mes(sesSnsEventRequest: SesSnsEventRequest): string {
    return sesSnsEventRequest.Records.map((record: Record) =>
      this.convertTimestampToSpanishMonth(record.ses.mail.timestamp),
    ).join(',');
  }

  private retrasado(sesSnsEventRequest: SesSnsEventRequest): boolean {
    return sesSnsEventRequest.Records.every(
      (record: Record) => record.ses.receipt.processingTimeMillis > 1000,
    );
  }

  private emisor(sesSnsEventRequest: SesSnsEventRequest): string {
    return sesSnsEventRequest.Records.map(
      (record: Record) =>
        record.ses.mail.source.includes('@') &&
        record.ses.mail.source.split('@')[0],
    ).join(', ');
  }

  private receptor(sesSnsEventRequest: SesSnsEventRequest): string[] {
    const destinationEmails = [];
    sesSnsEventRequest.Records.forEach((record: Record) =>
      record.ses.mail.destination.forEach((destination) =>
        destination.includes('@')
          ? destinationEmails.push(destination.split('@')[0])
          : null,
      ),
    );
    return destinationEmails;
  }
}
