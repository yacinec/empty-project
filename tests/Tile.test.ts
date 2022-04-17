import Tile from "../src/Tile";

describe("test add function", () => {
  it("should return an object", () => {
    expect(new Tile("", [2, 2])).not.toBe(null);
  });
});
