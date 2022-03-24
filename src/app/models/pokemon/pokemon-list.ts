import { ResponseLink } from "./response-link";

export class PokemonList {
  count?: number;
  next?: string;
  previous?: string;
  results: ResponseLink[] = [];

  constructor(object: Partial<PokemonList>) {
    Object.assign(this, object);
  }
}
