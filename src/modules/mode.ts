/* Quick action */    import * as quickAction from "../figma-quickaction";


export const all = new quickAction.OperationModule("allModes", main);


function main() {

  // Get selected nodes.
  let userSelection = figma.currentPage.selection;

  for (let node of userSelection) {

    // Get only the instances.
    if (node.type === "INSTANCE") {

      // Get the source component of the instance.
      let mainComponent = node.mainComponent;
      if (mainComponent!) {

        let modes = mainComponent.explicitVariableModes,
            collections = Object.keys(modes);

        if (collections.length !== 0) {

          for (let collectionID of collections)
            node.setExplicitVariableModeForCollection(collectionID, modes[collectionID]);

        }
      }
    }
  }
}