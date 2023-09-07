/* Quick action */    import * as quickAction from "../figma-quickaction";


export const all = new quickAction.OperationModule("allSpacing", main, "item, counterAxis");
export const item = new quickAction.OperationModule("itemSpacing", main, "item");
export const counterAxis = new quickAction.OperationModule("counterAxisSpacing", main, "counterAxis");


function main(affectedSpacing: string) {

  // Get selected nodes.
  let userSelection = figma.currentPage.selection;

  for (let node of userSelection) {

    // Get only the instances.
    if (node.type === "INSTANCE") {

      // Get the source component of the instance.
      let mainComponent = node.mainComponent;
      if (mainComponent!) {

        // Item spacing.
        if (affectedSpacing.includes("item")) {

          if (mainComponent.boundVariables! && mainComponent.boundVariables.itemSpacing!)
            node.setBoundVariable("itemSpacing", mainComponent.boundVariables.itemSpacing.id);
          else node.itemSpacing = mainComponent.itemSpacing;

        }

        // Counter axis spacing.
        if (affectedSpacing.includes("counterAxis")) {

          if (mainComponent.boundVariables! && mainComponent.boundVariables.counterAxisSpacing!)
            node.setBoundVariable("counterAxisSpacing", mainComponent.boundVariables.counterAxisSpacing.id);
          else node.counterAxisSpacing = mainComponent.counterAxisSpacing;

        }
      }
    }
  }
}