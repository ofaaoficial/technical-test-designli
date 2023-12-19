export abstract class MailService {
  public abstract parseEmail(pathOrUrl: string): Promise<any>;
}
