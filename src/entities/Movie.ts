import { uuid } from "uuidv4";

export class Movie {
  public readonly id: string;

  public title: string;
  public duration: number;
  public release_date: Date;

  constructor(props: Omit<Movie, "id">, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}
