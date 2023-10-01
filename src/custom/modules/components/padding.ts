/* System */          import { OperationModule } from "../../../library/figma/system/modules";
                      import * as type from "../../../library/figma/system/typegroups";
                      import * as consoleTheme from "../../../library/console-theme";

/* Helpers */         import { ResetPropertiesLibrary } from "../core/reset-library";


export const all = new OperationModule("allPadding", false, async () => {

  let scoreCard = {

    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0

  };

  let paddingLibrary = new ResetPropertiesLibrary();
  await paddingLibrary.addNodesFromSelection();

  await paddingLibrary.processEntries((node: SceneNode, reference: SceneNode) => {

    if (type.canAutolayout(node) && type.canAutolayout(reference)) {
      
      scoreCard.paddingTop += matchTopPadding(node, reference);
      scoreCard.paddingBottom += matchBottomPadding(node, reference);
      scoreCard.paddingLeft += matchLeftPadding(node, reference);
      scoreCard.paddingRight += matchRightPadding(node, reference);

    }
    
  });

  console.log(scoreCard);

  figma.notify("Process completed.", { timeout: 500 });

});


export function matchTopPadding(node: type.AutolayoutNode, reference: type.AutolayoutNode): number {

  let reset = 0;

  // Reset variable.
  if (reference.boundVariables?.paddingTop) {
    if (node.boundVariables?.paddingTop?.id === reference.boundVariables.paddingTop.id) {

      // Do nothing.

    }

    else {

      node.setBoundVariable("paddingTop", reference.boundVariables.paddingTop.id);
      reset = 1;

    }
  
  }

  // Reset value.
  else if (node.paddingTop !== reference.paddingTop) {

    node.paddingTop = reference.paddingTop;
    reset = 1;

  }

  // Log changes to console.
  if (reset === 1)
    console.log(`%cTop padding reset for ${node.name}.`, consoleTheme.primary);

  return reset;

}


export function matchBottomPadding(node: type.AutolayoutNode, reference: type.AutolayoutNode): number {

  let reset = 0;

  // Reset variable.
  if (reference.boundVariables?.paddingBottom) {
    if (node.boundVariables?.paddingBottom?.id === reference.boundVariables.paddingBottom.id) {

      // Do nothing.

    }

    else {

      node.setBoundVariable("paddingBottom", reference.boundVariables.paddingBottom.id);
      reset = 1;

    }

  }

  // Reset value.
  else if (node.paddingBottom !== reference.paddingBottom) {
      
    node.paddingBottom = reference.paddingBottom;
    reset = 1;

  }

  // Log changes to console.
  if (reset === 1)
    console.log(`%cBottom padding reset for ${node.name}.`, consoleTheme.primary);

  return reset;

}


export function matchLeftPadding(node: type.AutolayoutNode, reference: type.AutolayoutNode): number {

  let reset = 0;

  // Reset variable.
  if (reference.boundVariables?.paddingLeft) {
    if (node.boundVariables?.paddingLeft?.id === reference.boundVariables.paddingLeft.id) {

      // Do nothing.

    }

    else {
    
      node.setBoundVariable("paddingLeft", reference.boundVariables.paddingLeft.id);
      reset = 1;

    }

  }

  // Reset value.
  else if (node.paddingLeft !== reference.paddingLeft) {
      
    node.paddingLeft = reference.paddingLeft;
    reset = 1;

  }

  // Log changes to console.
  if (reset === 1)
    console.log(`%cLeft padding reset for ${node.name}.`, consoleTheme.primary);

  return reset;

}


export function matchRightPadding(node: type.AutolayoutNode, reference: type.AutolayoutNode): number {

  let reset = 0;

  // Reset variable.
  if (reference.boundVariables?.paddingRight) {
    if (node.boundVariables?.paddingRight?.id === reference.boundVariables.paddingRight.id) {

      // Do nothing.

    }

    else {
    
      node.setBoundVariable("paddingRight", reference.boundVariables.paddingRight.id);
      reset = 1;

    }

  }

  // Reset value.
  else if (node.paddingRight !== reference.paddingRight) {
      
    node.paddingRight = reference.paddingRight;
    reset = 1;

  }

  // Log changes to console.
  if (reset === 1)
    console.log(`%cRight padding reset for ${node.name}.`, consoleTheme.primary);

  return reset;

}