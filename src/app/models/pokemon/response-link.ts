export class ResponseLink {
  name?: string;
  url?: string;

  constructor(object: Partial<ResponseLink>){
    Object.assign(this, object);
  }
}

