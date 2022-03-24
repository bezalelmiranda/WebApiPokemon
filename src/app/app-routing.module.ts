import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPokemonComponent } from './components/detail-pokemon/detail-pokemon.component';
import { ListPokemonsComponent } from './components/list-pokemons/list-pokemons.component';

const routes: Routes = [
  {path:'pokemons', component: ListPokemonsComponent},
  {path: 'pokemon/:name', component: DetailPokemonComponent},
  {path: '', redirectTo: '/pokemons', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
