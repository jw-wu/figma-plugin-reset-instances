/* System */          import { OperationModule } from "../../../library/figma/system/modules";
                      import * as type from "../../../library/figma/system/typegroups";
                      import * as consoleTheme from "../../../library/console-theme";

/* Helpers */         import { ResetPropertiesLibrary } from "../core/reset-library";


export const all = new OperationModule("allSpacing", false, async () => {

  let scoreCard = {

    itemSpacing: 0,
    counterAxisSpacing: 0

  };

  let spacingLibrary = new ResetPropertiesLibrary();
  await spacingLibrary.addNodesFromSelection();

  await spacingLibrary.processEntries((node: SceneNode, reference: SceneNode) => {

    if (type.canAutolayout(node) && type.canAutolayout(reference)) {
      
      scoreCard.itemSpacing += matchItemSpacing(node, reference);
      scoreCard.counterAxisSpacing += matchCounterAxisSpacing(node, reference);

    }

  });

  console.log(scoreCard);

  figma.notify("Process completed.", { timeout: 500 });

});


export function matchItemSpacing(node: type.AutolayoutNode, reference: type.AutolayoutNode): number {

  let reset = 0;

  // Reset variable.
  if (reference.boundVariables?.itemSpacing) {
    if (node.boundVariables?.itemSpacing?.id === reference.boundVariables.itemSpacing.id) {

      // Do nothing.

    }

    else {
    
      node.setBoundVariable("itemSpacing", reference.boundVariables.itemSpacing.id);
      reset = 1;

    }

  }

  // Reset value.
  else if (node.itemSpacing !== reference.itemSpacing) {
      
      node.itemSpacing = reference.itemSpacing;
      reset = 1;

  }

  // Log changes to console.
  if (reset === 1)
    console.log(`%cItem spacing reset for ${node.name}.`, consoleTheme.primary);

  return reset;

}


export function matchCounterAxisSpacing(node: type.AutolayoutNode, reference: type.AutolayoutNode): number {
  
  let reset = 0;

  // Reset variable.
  if (reference.boundVariables?.counterAxisSpacing) {

    if (node.boundVariables?.counterAxisSpacing?.id === reference.boundVariables.counterAxisSpacing.id) {

      // Do nothing.

    }

    else {

      node.setBoundVariable("counterAxisSpacing", reference.boundVariables.counterAxisSpacing.id);
      reset = 1;

    }

  }

  // Reset value.
  else if (node.counterAxisSpacing !== reference.counterAxisSpacing) {
      
      node.counterAxisSpacing = reference.counterAxisSpacing;
      reset = 1;

  }

  // Log changes to console.
  if (reset === 1)
    console.log(`%cCounter axis spacing reset for ${node.name}.`, consoleTheme.primary);

  return reset;

}