export class Sprites {
  back_default?: string;
  back_female?:string;
  back_shiny?:string;
  back_shiny_female?:string;
  front_default?:string;
  front_female?:string;
  front_shiny?:string;
  front_shiny_female?:string;

  constructor(object: Partial<Sprites>){
    Object.assign(this, object);
  }
}
