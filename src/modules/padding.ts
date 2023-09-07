/* Quick action */    import * as quickAction from "../figma-quickaction";


export const all = new quickAction.OperationModule("allPadding", main, "top, bottom, left, right");
export const top = new quickAction.OperationModule("topPadding", main, "top");
export const bottom = new quickAction.OperationModule("bottomPadding", main, "bottom");
export const left = new quickAction.OperationModule("leftPadding", main, "left");
export const right = new quickAction.OperationModule("rightPadding", main, "right");


function main(affectedPadding: string) {

  // Get selected nodes.
  let userSelection = figma.currentPage.selection;

  for (let node of userSelection) {

    // Get only the instances.
    if (node.type === "INSTANCE") {

      // Get the source component of the instance.
      let mainComponent = node.mainComponent;
      if (mainComponent!) {

        // Top padding.
        if (affectedPadding.includes("top")) {

          if (mainComponent.boundVariables! && mainComponent.boundVariables.paddingTop!)
            node.setBoundVariable("paddingTop", mainComponent.boundVariables.paddingTop.id);
          else node.paddingTop = mainComponent.paddingTop;

        }

        // Bottom padding.
        if (affectedPadding.includes("bottom")) {

          if (mainComponent.boundVariables! && mainComponent.boundVariables.paddingBottom!)
            node.setBoundVariable("paddingBottom", mainComponent.boundVariables.paddingBottom.id);
          else node.paddingBottom = mainComponent.paddingBottom;

        }

        // Left padding.
        if (affectedPadding.includes("left")) {

          if (mainComponent.boundVariables! && mainComponent.boundVariables.paddingLeft!)
            node.setBoundVariable("paddingLeft", mainComponent.boundVariables.paddingLeft.id);
          else node.paddingLeft = mainComponent.paddingLeft;

        }

        // Right padding.
        if (affectedPadding.includes("right")) {

          if (mainComponent.boundVariables! && mainComponent.boundVariables.paddingRight!)
            node.setBoundVariable("paddingRight", mainComponent.boundVariables.paddingRight.id);
          else node.paddingRight = mainComponent.paddingRight;

        }
      }
    }
  }
}