import { Pokemon } from './../../models/pokemon/pokemon';
import { PokeApiService } from 'src/app/services/poke-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.scss']
})
export class DetailPokemonComponent implements OnInit {

  pokemonObj: Pokemon = new Pokemon({});

  constructor(private route: ActivatedRoute,
              private pokemonService: PokeApiService) { }

  ngOnInit(): void {
    // pega as informações do parâmetro escolhido ('name')
    let name = this.route.snapshot.paramMap.get('name');
    if (name) {
      this.pokemonService
          .getPokemonByNameOrId(name)
          .subscribe((pokemon) => {
            console.log(pokemon);
            this.pokemonObj = pokemon;
          });
    }
  }

}
