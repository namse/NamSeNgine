import IDrawer from "../RenderEngine/Drawer/IDrawer";
import { TextElementState } from "../RenderEngine/BasicTypes/TextElementState";

type Element = {
  id: string;
  type: string;
};

type StateTree = {
  elements: Element[];
};

export default function renderTree(stateTree: StateTree, drawer: IDrawer) {
  stateTree.elements.forEach((element) => {
    switch (element.id) {
      case "text":
        drawer.drawText(element as TextElementState);
        break;
    }
  });
}
