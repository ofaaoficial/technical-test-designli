import { SesSnsEventFactoryImpl } from './ses-sns-event-factory-impl';
import { SesSnsEventRequest } from '../../infraestructure/api/dtos/requests/ses-sns-event.request';
import { BadRequestException } from '@nestjs/common';
import { SesSnsEvent } from '../../domain/ses-sns-event.entity';
import mocks from "../../mocks";

describe('SesSnsEventFactory', () => {
  let factory: SesSnsEventFactoryImpl;
  let correctMockRequest: SesSnsEventRequest;
  let incorrectMockRequest: SesSnsEventRequest;

  beforeAll(() => {
    factory = new SesSnsEventFactoryImpl();
    correctMockRequest = mocks.EXAMPLE_CORRECT_SES_SNS_EVENT;
    incorrectMockRequest = mocks.EXAMPLE_INCORRECT_SES_SNS_EVENT;
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
