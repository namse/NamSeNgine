import Vector2 from "../Vector2";
import Color4 from "../Color4";

export type TextElementState = {
  readonly id: string;
  readonly type: string;
  text: string;
  position: Vector2;
  color: Color4;
  fontSize: number;
};
