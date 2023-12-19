import { SesSnsEventFactoryImpl } from './ses-sns-event-factory-impl';
import { SesSnsEventRequest } from '../../infraestructure/api/dtos/requests/ses-sns-event.request';
import { BadRequestException } from '@nestjs/common';
import { SesSnsEvent } from '../../domain/ses-sns-event.entity';

describe('SesSnsEventFactory', () => {
  let factory: SesSnsEventFactoryImpl;
  let correctMockRequest: SesSnsEventRequest;
  let incorrectMockRequest: SesSnsEventRequest;

  beforeAll(() => {
    factory = new SesSnsEventFactoryImpl();
    correctMockRequest = {
      Records: [
        {
          eventVersion: '1.0',
          ses: {
            receipt: {
              timestamp: '2015-09-11T20:32:33.936Z',
              processingTimeMillis: 222,
              recipients: ['recipient@example.com'],
              spamVerdict: {
                status: 'PASS',
              },
              virusVerdict: {
                status: 'PASS',
              },
              spfVerdict: {
                status: 'PASS',
              },
              dkimVerdict: {
                status: 'PASS',
              },
              dmarcVerdict: {
                status: 'PASS',
              },
              dmarcPolicy: 'reject',
              action: {
                type: 'SNS',
                topicArn: 'arn:aws:sns:us-east-1:012345678912:example-topic',
              },
            },
            mail: {
              timestamp: '2015-09-11T20:32:33.936Z',
              source: '61967230-7A45-4A9D-BEC9-87CBCF2211C9@example.com',
              messageId: 'd6iitobk75ur44p8kdnnp7g2n800',
              destination: ['recipient@example.com'],
              headersTruncated: false,
              headers: [
                {
                  name: 'Return-Path',
                  value:
                    '<0000014fbe1c09cf-7cb9f704-7531-4e53-89a1-5fa9744f5eb6-000000@amazonses.com>',
                },
                {
                  name: 'Received',
                  value:
                    'from a9-183.smtp-out.amazonses.com (a9-183.smtp-out.amazonses.com [54.240.9.183]) by inbound-smtp.us-east-1.amazonaws.com with SMTP id d6iitobk75ur44p8kdnnp7g2n800 for recipient@example.com; Fri, 11 Sep 2015 20:32:33 +0000 (UTC)',
                },
                {
                  name: 'DKIM-Signature',
                  value:
                    'v=1; a=rsa-sha256; q=dns/txt; c=relaxed/simple; s=ug7nbtf4gccmlpwj322ax3p6ow6yfsug; d=amazonses.com; t=1442003552; h=From:To:Subject:MIME-Version:Content-Type:Content-Transfer-Encoding:Date:Message-ID:Feedback-ID; bh=DWr3IOmYWoXCA9ARqGC/UaODfghffiwFNRIb2Mckyt4=; b=p4ukUDSFqhqiub+zPR0DW1kp7oJZakrzupr6LBe6sUuvqpBkig56UzUwc29rFbJF hlX3Ov7DeYVNoN38stqwsF8ivcajXpQsXRC1cW9z8x875J041rClAjV7EGbLmudVpPX 4hHst1XPyX5wmgdHIhmUuh8oZKpVqGi6bHGzzf7g=',
                },
                {
                  name: 'From',
                  value: 'sender@example.com',
                },
                {
                  name: 'To',
                  value: 'recipient@example.com',
                },
                {
                  name: 'Subject',
                  value: 'Example subject',
                },
                {
                  name: 'MIME-Version',
                  value: '1.0',
                },
                {
                  name: 'Content-Type',
                  value: 'text/plain; charset=UTF-8',
                },
                {
                  name: 'Content-Transfer-Encoding',
                  value: '7bit',
                },
                {
                  name: 'Date',
                  value: 'Fri, 11 Sep 2015 20:32:32 +0000',
                },
                {
                  name: 'Message-ID',
                  value: '<61967230-7A45-4A9D-BEC9-87CBCF2211C9@example.com>',
                },
                {
                  name: 'X-SES-Outgoing',
                  value: '2015.09.11-54.240.9.183',
                },
                {
                  name: 'Feedback-ID',
                  value:
                    '1.us-east-1.Krv2FKpFdWV+KUYw3Qd6wcpPJ4Sv/pOPpEPSHn2u2o4=:AmazonSES',
                },
              ],
              commonHeaders: {
                returnPath:
                  '0000014fbe1c09cf-7cb9f704-7531-4e53-89a1-5fa9744f5eb6-000000@amazonses.com',
                from: ['sender@example.com'],
                date: 'Fri, 11 Sep 2015 20:32:32 +0000',
                to: ['recipient@example.com'],
                messageId: '<61967230-7A45-4A9D-BEC9-87CBCF2211C9@example.com>',
                subject: 'Example subject',
              },
            },
          },
          eventSource: 'aws:ses',
        },
      ],
    };
    incorrectMockRequest = {
      Records: [
        {
          eventVersion: '1.0',
          ses: {
            receipt: {
              timestamp: '2015-09',
              processingTimeMillis: 9999,
              recipients: ['recipient@example.com'],
              spamVerdict: {
                status: 'NONE',
              },
              virusVerdict: {
                status: 'NONE',
              },
              spfVerdict: {
                status: 'NONE',
              },
              dkimVerdict: {
                status: 'NONE',
              },
              dmarcVerdict: {
                status: 'NONE',
              },
              dmarcPolicy: 'reject',
              action: {
                type: 'SNS',
                topicArn: 'arn:aws:sns:us-east-1:012345678912:example-topic',
              },
            },
            mail: {
              timestamp: '2015',
              source: '61967230-7A45-4A9D-BEC9-87CBCF2211C9',
              messageId: 'd6iitobk75ur44p8kdnnp7g2n800',
              destination: ['recipient@example.com', 'recip'],
              headersTruncated: false,
              headers: [
                {
                  name: 'Return-Path',
                  value:
                    '<0000014fbe1c09cf-7cb9f704-7531-4e53-89a1-5fa9744f5eb6-000000@amazonses.com>',
                },
                {
                  name: 'Received',
                  value:
                    'from a9-183.smtp-out.amazonses.com (a9-183.smtp-out.amazonses.com [54.240.9.183]) by inbound-smtp.us-east-1.amazonaws.com with SMTP id d6iitobk75ur44p8kdnnp7g2n800 for recipient@example.com; Fri, 11 Sep 2015 20:32:33 +0000 (UTC)',
                },
                {
                  name: 'DKIM-Signature',
                  value:
                    'v=1; a=rsa-sha256; q=dns/txt; c=relaxed/simple; s=ug7nbtf4gccmlpwj322ax3p6ow6yfsug; d=amazonses.com; t=1442003552; h=From:To:Subject:MIME-Version:Content-Type:Content-Transfer-Encoding:Date:Message-ID:Feedback-ID; bh=DWr3IOmYWoXCA9ARqGC/UaODfghffiwFNRIb2Mckyt4=; b=p4ukUDSFqhqiub+zPR0DW1kp7oJZakrzupr6LBe6sUuvqpBkig56UzUwc29rFbJF hlX3Ov7DeYVNoN38stqwsF8ivcajXpQsXRC1cW9z8x875J041rClAjV7EGbLmudVpPX 4hHst1XPyX5wmgdHIhmUuh8oZKpVqGi6bHGzzf7g=',
                },
                {
                  name: 'From',
                  value: 'sender@example.com',
                },
                {
                  name: 'To',
                  value: 'recipient@example.com',
                },
                {
                  name: 'Subject',
                  value: 'Example subject',
                },
                {
                  name: 'MIME-Version',
                  value: '1.0',
                },
                {
                  name: 'Content-Type',
                  value: 'text/plain; charset=UTF-8',
                },
                {
                  name: 'Content-Transfer-Encoding',
                  value: '7bit',
                },
                {
                  name: 'Date',
                  value: 'Fri, 11 Sep 2015 20:32:32 +0000',
                },
                {
                  name: 'Message-ID',
                  value: '<61967230-7A45-4A9D-BEC9-87CBCF2211C9@example.com>',
                },
                {
                  name: 'X-SES-Outgoing',
                  value: '2015.09.11-54.240.9.183',
                },
                {
                  name: 'Feedback-ID',
                  value:
                    '1.us-east-1.Krv2FKpFdWV+KUYw3Qd6wcpPJ4Sv/pOPpEPSHn2u2o4=:AmazonSES',
                },
              ],
              commonHeaders: {
                returnPath:
                  '0000014fbe1c09cf-7cb9f704-7531-4e53-89a1-5fa9744f5eb6-000000@amazonses.com',
                from: ['sender@example.com', 'asfd'],
                date: 'Fri, 11 Sep 2015 20:32:32 +0000',
                to: ['recipient@example.com'],
                messageId: '<61967230-7A45-4A9D-BEC9-87CBCF2211C9@example.com>',
                subject: 'Example subject',
              },
            },
          },
          eventSource: 'aws:ses',
        },
      ],
    };
  });

  it('should create a SesSnsEvent successfully', () => {
    const result = factory.createSesSnsEvent(correctMockRequest);
    expect(result).toBeInstanceOf(SesSnsEvent);
  });

  it('should throw BadRequestException for invalid input', () => {
    expect(() => factory.createSesSnsEvent(null)).toThrow(BadRequestException);
  });

  it('should convert timestamp to Spanish month correctly', () => {
    const timestamp = '2023-03-15T12:00:00Z';
    expect(factory['convertTimestampToSpanishMonth'](timestamp)).toEqual(
      'Marzo',
    );
  });

  it('should throw BadRequestException for invalid timestamp format', () => {
    const invalidTimestamp = 'invalid-date';
    expect(() =>
      factory['convertTimestampToSpanishMonth'](invalidTimestamp),
    ).toThrow(BadRequestException);
  });

  // Prueba para spam
  it('should return true if all records pass spam check', () => {
    expect(factory['spam'](correctMockRequest)).toBe(true);
  });

  it('should return false if any record fails spam check', () => {
    expect(factory['spam'](incorrectMockRequest)).toBe(false);
  });

  // Pruebas para virus
  it('should return true if all records pass virus check', () => {
    expect(factory['virus'](correctMockRequest)).toBe(true);
  });

  it('should return false if any record fails virus check', () => {
    expect(factory['virus'](incorrectMockRequest)).toBe(false);
  });

  // Pruebas para dns
  it('should return true if all records pass DNS checks', () => {
    expect(factory['dns'](correctMockRequest)).toBe(true);
  });

  it('should return false if any record fails DNS checks', () => {
    expect(factory['dns'](incorrectMockRequest)).toBe(false);
  });

  // Pruebas para retrasado
  it('should return true if all records have processing time over 1000 ms', () => {
    expect(factory['retrasado'](incorrectMockRequest)).toBe(true);
  });

  it('should return false if any record has processing time under 1000 ms', () => {
    expect(factory['retrasado'](correctMockRequest)).toBe(false);
  });

  // Pruebas para emisor
  it('should extract and return the correct emitters from records', () => {
    const expectedEmitters = ['61967230-7A45-4A9D-BEC9-87CBCF2211C9'];
    expect(factory['emisor'](correctMockRequest)).toEqual(
      expectedEmitters.join(','),
    );
  });

  // Pruebas para receptor
  it('should extract and return the correct recipients from records', () => {
    const expectedRecipients = ['recipient'];
    expect(factory['receptor'](correctMockRequest)).toEqual(expectedRecipients);
  });
});
