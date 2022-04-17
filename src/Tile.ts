export default class Tile {
  sprite: string;
  position: Array<number>;

  constructor(sprite: string, position: Array<number>) {
    this.sprite = sprite;
    this.position = position;
  }
}
