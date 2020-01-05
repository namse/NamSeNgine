export default class Vector2 {
  public static Zero = new Vector2(0, 0);

  public constructor(
    public readonly x: number,
    public readonly y: number,
  ) {
  }

  public addVector2(vector2: Vector2): Vector2 {
    return this.add(vector2.x, vector2.y);
  }

  public add(x: number, y: number): Vector2 {
    return new Vector2(
      this.x + x,
      this.y + y,
    );
  }

  public subVector2(vector2: Vector2): Vector2 {
    return this.sub(vector2.x, vector2.y);
  }

  public sub(x: number, y: number): Vector2 {
    return new Vector2(
      this.x - x,
      this.y - y,
    );
  }

  public scale(x: number, y: number): Vector2 {
    return new Vector2(
      this.x * x,
      this.y * y,
    );
  }

  public scaleVector2(vector2: Vector2): Vector2 {
    return this.scale(vector2.x, vector2.y);
  }
}
