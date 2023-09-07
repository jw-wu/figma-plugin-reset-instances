/* Quick action */    import * as quickAction from "../figma-quickaction";


export const all = new quickAction.OperationModule("allDimensions", main, "both, maxWidth, minWidth, maxHeight, minHeight");
export const widthHeight = new quickAction.OperationModule("widthHeight", main, "both");
export const width = new quickAction.OperationModule("width", main, "width");
export const height = new quickAction.OperationModule("height", main, "height");
export const maxWidth = new quickAction.OperationModule("maxWidth", main, "maxWidth");
export const minWidth = new quickAction.OperationModule("minWidth", main, "minWidth");
export const maxHeight = new quickAction.OperationModule("maxHeight", main, "maxHeight");
export const minHeight = new quickAction.OperationModule("minHeight", main, "minHeight");


function main(affectedDimension: string) {

  // Get selected nodes.
  let userSelection = figma.currentPage.selection;

  for (let node of userSelection) {

    // Get only the instances.
    if (node.type === "INSTANCE") {

      // Get the source component of the instance.
      let mainComponent = node.mainComponent;
      if (mainComponent!) {

        // Both width and height
        if (affectedDimension === "both") {

          let newWidth = node.width,
              newHeight = node.height;

          if (mainComponent.boundVariables! && mainComponent.boundVariables.width!)
            node.setBoundVariable("width", mainComponent.boundVariables.width.id);
          else newWidth = mainComponent.width;

          if (mainComponent.boundVariables! && mainComponent.boundVariables.height!)
            node.setBoundVariable("height", mainComponent.boundVariables.height.id);
          else newHeight = mainComponent.height;
          
          node.resize(newWidth, newHeight);

        }

        // Width only
        if (affectedDimension === "width") {

          if (mainComponent.boundVariables! && mainComponent.boundVariables.width!)
            node.setBoundVariable("width", mainComponent.boundVariables.width.id);
          else node.resize(mainComponent.width, node.height);

        }

        // Height only
        if (affectedDimension === "height") {

          if (mainComponent.boundVariables! && mainComponent.boundVariables.height!)
            node.setBoundVariable("height", mainComponent.boundVariables.height.id);
          else node.resize(node.width, mainComponent.height);

        }

        // Max-width
        if (affectedDimension === "maxWidth") {

          if (mainComponent.boundVariables! && mainComponent.boundVariables.maxWidth!)
            node.setBoundVariable("maxWidth", mainComponent.boundVariables.maxWidth.id);
          else node.maxWidth = mainComponent.maxWidth;
        }

        // Min-width
        if (affectedDimension === "minWidth") {

          if (mainComponent.boundVariables! && mainComponent.boundVariables.minWidth!)
            node.setBoundVariable("minWidth", mainComponent.boundVariables.minWidth.id);
          else node.minWidth = mainComponent.minWidth;

        }

        // Max-height
        if (affectedDimension === "maxHeight") {

          if (mainComponent.boundVariables! && mainComponent.boundVariables.maxHeight!)
            node.setBoundVariable("maxHeight", mainComponent.boundVariables.maxHeight.id);
          else node.maxHeight = mainComponent.maxHeight;
        }

        // Min-height
        if (affectedDimension === "minHeight") {

          if (mainComponent.boundVariables! && mainComponent.boundVariables.minHeight!)
            node.setBoundVariable("minHeight", mainComponent.boundVariables.minHeight.id);
          else node.minHeight = mainComponent.minHeight;

        }
      }
    }
  }
}