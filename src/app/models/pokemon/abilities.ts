import { ResponseLink } from './response-link';
export class Abilities {
  is_hidden?: boolean;
  slot?: number;
  ability?: ResponseLink;

  constructor(object: Partial<Abilities>){
    Object.assign(this, object);
  }
}
