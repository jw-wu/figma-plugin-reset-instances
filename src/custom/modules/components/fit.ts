/* System */          import { OperationModule } from "../../../library/figma/system/modules";
                      import * as type from "../../../library/figma/system/typegroups";
                      import * as consoleTheme from "../../../library/console-theme";

/* Helpers */         import { ResetPropertiesLibrary } from "../core/reset-library";


export const all = new OperationModule("allDimensions", false, async () => {

  let scoreCard = {

    fit: 0

  };

  let fitLibrary = new ResetPropertiesLibrary();
  await fitLibrary.addNodesFromSelection();

  await fitLibrary.processEntries((node: SceneNode, reference: SceneNode, topLevel: boolean): void => {

    if (type.canAutolayout(node) && type.canAutolayout(reference)) {

      scoreCard.fit += matchAll(node, reference);

    }

  });

  console.log(scoreCard);

  figma.notify("Process completed.", { timeout: 500 });

});


export function matchAll(node: type.AutolayoutNode, reference: type.AutolayoutNode): number {

  let reset = 0;

  // Reset variable.
  if (node.layoutSizingHorizontal !== reference.layoutSizingHorizontal) {
    
    node.layoutSizingHorizontal = reference.layoutSizingHorizontal;
    reset = 1;
  
  }
  
  // Reset value.
  else if (node.layoutSizingVertical !== reference.layoutSizingVertical) {
    
    node.layoutSizingVertical = reference.layoutSizingVertical;
    reset = 1;

  }

  // Log changes to console.
  if (reset === 1)
    console.log(`%Horizontal and vertical fit reset for ${node.name}.`, consoleTheme.primary);

  return reset;
  
}