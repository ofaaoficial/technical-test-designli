import * as mailparser from 'mailparser';
import axios from 'axios';
import { MailServiceImpl } from './mail.service';
import { BadRequestException } from '@nestjs/common';
import mocks from '../../mocks';

jest.mock('axios');
jest.mock('fs');

describe('MailServiceImpl', () => {
  let service: MailServiceImpl;

  beforeEach(() => {
    service = new MailServiceImpl();
    jest.clearAllMocks();
  });

  describe('parseEmail', () => {
    it('should parse email from URL and return an BadRequestException', async () => {
      jest
        .spyOn(mailparser, 'simpleParser')
        .mockResolvedValue({ attachments: [], text: mocks.EXAMPLE_EML });

      await expect(
        service.parseEmail('http://example.com/email'),
      ).rejects.toThrow(BadRequestException);
    });

    it('should parse email from URL and return a json', async () => {
      jest
        .spyOn(service, 'fetchData')
        .mockResolvedValue(mocks.EXAMPLE_EML_LINK);
      jest
        .spyOn(mailparser, 'simpleParser')
        .mockResolvedValue({ attachments: [], text: mocks.EXAMPLE_EML_LINK });
      jest
        .spyOn(service, 'processJsonUrlFromEmail')
        .mockResolvedValue(mocks.JSON);

      await expect(
        service.parseEmail('http://example.com/email'),
      ).resolves.toEqual(mocks.JSON);
    });
  });

  describe('processJsonUrlFromEmail', () => {
    it('should extract JSON URL from body', async () => {
      jest.spyOn(service, 'fetchData').mockResolvedValue(mocks.JSON);

      await expect(
        service.processJsonUrlFromEmail({
          text: mocks.EXAMPLE_EML_LINK,
        }),
      ).resolves.toEqual(mocks.JSON);
    });
  });

  describe('extractJsonUrl', () => {
    it('should extract JSON URL from body', () => {
      const body = 'Here is a json file link: http://example.com/file.json';
      expect(service['extractJsonUrl'](body)).toEqual(
        'http://example.com/file.json',
      );
    });
  });

  describe('fetchData', () => {
    it('should fetch data from URL', async () => {
      const mockUrl = 'http://example.com/data.json';
      const mockData = { key: 'value' };
      (axios.get as jest.Mock).mockResolvedValue({ data: mockData });

      await expect(service['fetchData'](mockUrl)).resolves.toEqual(mockData);
      expect(axios.get).toHaveBeenCalledWith(mockUrl);
    });
  });
});
