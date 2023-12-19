export abstract class ParseUseCase {
  public abstract handler(pathOrUrl: string): Promise<any>;
}
