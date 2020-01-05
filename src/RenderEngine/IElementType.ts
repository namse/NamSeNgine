import Drawer from "./Drawer/IDrawer";
import Vector2 from "./Vector2";

export interface IElementType {
  position: Vector2;
  size: Vector2;
  render(drawer: Drawer): void;
}
