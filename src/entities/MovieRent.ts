export class MovieRent {
  public readonly userId: string;
  public readonly movieId: string;

  constructor(props: MovieRent) {
    Object.assign(this, props);
  }
}
