/* Quick action */    import * as quickAction from "../figma-quickaction";


export const toggle = new quickAction.OperationModule("visibility", main);


function main() {

  // Get selected nodes.
  let userSelection = figma.currentPage.selection;

  for (let node of userSelection) {

    // Get only the instances.
    if (node.type === "INSTANCE") {

      // Get the source component of the instance.
      let mainComponent = node.mainComponent;
      if (mainComponent!) {

        if (mainComponent.boundVariables! && mainComponent.boundVariables.visible!)
          node.setBoundVariable("visible", mainComponent.boundVariables.visible.id);
        else node.visible = mainComponent.visible;

      }
    }
  }
}