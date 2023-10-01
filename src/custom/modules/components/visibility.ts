/* System */          import { OperationModule } from "../../../library/figma/system/modules";
                      import * as consoleTheme from "../../../library/console-theme";

/* Helpers */         import { ResetPropertiesLibrary } from "../core/reset-library";


export const toggle = new OperationModule("visibility", false, async () => {

  let scoreCard = {

    visibility: 0

  };

  let visibilityLibrary = new ResetPropertiesLibrary();
  await visibilityLibrary.addNodesFromSelection();

  await visibilityLibrary.processEntries((node: SceneNode, reference: SceneNode) => {

    scoreCard.visibility += match(node, reference);
    
  });

  console.log(scoreCard);

  figma.notify("Process completed.", { timeout: 500 });

});


export function match(node: SceneNode, reference: SceneNode): number {

  let reset = 0;

  // Reset variable.
  if (reference.boundVariables?.visible) {
    if (node.boundVariables?.visible === reference.boundVariables.visible) {

      // Do nothing.

    }

    else {

      node.setBoundVariable("visible", reference.boundVariables.visible.id);
      reset = 1;

    }

  }

  // Reset value.
  else if (node.visible !== reference.visible) {

      node.visible = reference.visible;
      reset = 1;

  }

  // Log changes to console.
  if (reset === 1)
    console.log(`%cVisibility reset for ${node.name}.`, consoleTheme.primary);

  return reset;

}