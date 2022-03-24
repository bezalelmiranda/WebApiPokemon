import { Sprites } from './sprites';
import { Abilities } from './abilities';
export class Pokemon {
  id?:number;
  name?: string;
  base_experience?: number;
  height?: number;
  is_default?: boolean;
  order?: number;
  weight?: number;
  abilities?: Abilities[];
  sprites?: Sprites;

  constructor(object: Partial<Pokemon>){
    Object.assign(this, object);
  }

}
