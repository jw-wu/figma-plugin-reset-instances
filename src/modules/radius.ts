/* Quick action */    import * as quickAction from "../figma-quickaction";


export const all = new quickAction.OperationModule("allRadii", main, "topLeftRadius, topRightRadius, bottomLeftRadius, bottomRightRadius");
export const topLeft = new quickAction.OperationModule("topLeftRadius", main, "topLeftRadius");
export const topRight = new quickAction.OperationModule("topRightRadius", main, "topRightRadius");
export const bottomLeft = new quickAction.OperationModule("bottomLeftRadius", main, "bottomLeftRadius");
export const bottomRight = new quickAction.OperationModule("bottomRightRadius", main, "bottomRightRadius");


function main(affectedPadding: string) {

  // Get selected nodes.
  let userSelection = figma.currentPage.selection;

  for (let node of userSelection) {

    // Get only the instances.
    if (node.type === "INSTANCE") {

      // Get the source component of the instance.
      let mainComponent = node.mainComponent;
      if (mainComponent!) {

        // Top left radius.
        if (affectedPadding.includes("topLeft")) {

          if (mainComponent.boundVariables! && mainComponent.boundVariables.topLeftRadius!)
            node.setBoundVariable("topLeftRadius", mainComponent.boundVariables.topLeftRadius.id);
          else node.topLeftRadius = mainComponent.topLeftRadius;

        }

        // Top right radius.
        if (affectedPadding.includes("topRight")) {

          if (mainComponent.boundVariables! && mainComponent.boundVariables.topRightRadius!)
            node.setBoundVariable("topRightRadius", mainComponent.boundVariables.topRightRadius.id);
          else node.topRightRadius = mainComponent.topRightRadius;

        }

        // Bottom left radius.
        if (affectedPadding.includes("bottomLeft")) {

          if (mainComponent.boundVariables! && mainComponent.boundVariables.bottomLeftRadius!)
            node.setBoundVariable("bottomLeftRadius", mainComponent.boundVariables.bottomLeftRadius.id);
          else node.bottomLeftRadius = mainComponent.bottomLeftRadius;

        }

        // Bottom right radius.
        if (affectedPadding.includes("bottomRight")) {

          if (mainComponent.boundVariables! && mainComponent.boundVariables.bottomRightRadius!)
            node.setBoundVariable("bottomRightRadius", mainComponent.boundVariables.bottomRightRadius.id);
          else node.bottomRightRadius = mainComponent.bottomRightRadius;

        }
      }
    }
  }
}