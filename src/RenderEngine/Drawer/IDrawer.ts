import Vector2 from "../Vector2";
import { TextElementState } from "../BasicTypes/TextElementState";

export default interface IDrawer {
  drawText(textElementState: TextElementState): void;
}
