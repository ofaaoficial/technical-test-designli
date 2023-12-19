import { IsString } from 'class-validator';

export class SpamVerdict {
  @IsString()
  status: string;
}

export class VirusVerdict {
  @IsString()
  status: string;
}

export class SpfVerdict {
  @IsString()
  status: string;
}

export class DkimVerdict {
  @IsString()
  status: string;
}

export class DmarcVerdict {
  @IsString()
  status: string;
}
