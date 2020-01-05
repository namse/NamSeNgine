import IDrawer from "./IDrawer";
import Vector2 from "../Vector2";
import { TextElementState } from "../BasicTypes/TextElementState";

export default class CanvasDrawer implements IDrawer {
  constructor(
    private _canvasRenderingContext: CanvasRenderingContext2D,
  ) {

  }

  public drawText(textElementState: TextElementState): void {
    const {
      text,
      color,
      position,
    } = textElementState;

    this._canvasRenderingContext.strokeStyle = `rgba(${color.r},${color.g},${color.b},${color.a})`;

    this._canvasRenderingContext.strokeText(
      text,
      position.x,
      position.y,
      // TODO : Max Width
    );
  }
}
