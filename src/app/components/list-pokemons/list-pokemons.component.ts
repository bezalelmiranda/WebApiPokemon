import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { PokemonList } from 'src/app/models/pokemon/pokemon-list';
import { ResponseLink } from 'src/app/models/pokemon/response-link';
import { PokeApiService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-list-pokemons',
  templateUrl: './list-pokemons.component.html',
  styleUrls: ['./list-pokemons.component.scss']
})
export class ListPokemonsComponent implements OnInit {

  listPokemon$ = new Subject<ResponseLink[]>();

  urlSpriteFront: string = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

  constructor(private route: ActivatedRoute,
              private pokemonService: PokeApiService) { }

  ngOnInit(): void {
    this.pokemonService
    .getListPokemons(undefined, 0, 898)
    .subscribe(
      (response) => {
        this.listPokemon$.next(response.results);
      }
    );
  }

}
