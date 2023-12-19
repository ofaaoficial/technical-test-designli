import { BadRequestException, Injectable } from '@nestjs/common';
import axios from 'axios';
import { readFileSync } from 'fs';
import { simpleParser } from 'mailparser';
@Injectable()
export class MailServiceImpl {
  async parseEmail(pathOrUrl: string): Promise<any> {
    try {
      const emailContent =
        pathOrUrl.startsWith('http://') || pathOrUrl.startsWith('https://')
          ? await this.fetchData(pathOrUrl)
          : readFileSync(pathOrUrl, { encoding: 'utf8' });

      const parsedEmail: any = await simpleParser(emailContent);
      for (const attachment of parsedEmail.attachments) {
        if (attachment.contentType === 'application/json') {
          return JSON.parse(attachment.content.toString('utf8'));
        }
      }

      return this.processJsonUrlFromEmail(parsedEmail);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async processJsonUrlFromEmail(parsedEmail: any): Promise<any> {
    const jsonUrl = this.extractJsonUrl(parsedEmail.text || parsedEmail.html);
    if (jsonUrl) {
      return this.fetchData(jsonUrl);
    }
    throw new Error('JSON not found in the email');
  }

  extractJsonUrl(body: string): string | null {
    // Expresión regular para detectar URLs con un .json file
    const urlRegex = /https?:\/\/[^\s]+\.json\b/g;
    const urls = body.match(urlRegex);

    return urls ? urls[0] : null;
  }

  async fetchData(url: string): Promise<any> {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch JSON from URL');
    }
  }
}
