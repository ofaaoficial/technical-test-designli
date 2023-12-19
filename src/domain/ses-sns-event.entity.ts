export class SesSnsEvent {
  private readonly spam: boolean;
  private readonly virus: boolean;
  private readonly dns: boolean;
  private readonly mes: string;
  private readonly retrasado: boolean;
  private readonly emisor: string;
  private readonly receptor: string[];
  constructor(
    spam: boolean,
    virus: boolean,
    dns: boolean,
    mes: string,
    retrasado: boolean,
    emisor: string,
    receptor: string[],
  ) {
    this.spam = spam;
    this.virus = virus;
    this.dns = dns;
    this.mes = mes;
    this.retrasado = retrasado;
    this.emisor = emisor;
    this.receptor = receptor;
  }
}
