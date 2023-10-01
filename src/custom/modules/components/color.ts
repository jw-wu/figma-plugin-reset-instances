/* System */          import { OperationModule } from "../../../library/figma/system/modules";
                      import * as type from "../../../library/figma/system/typegroups";
                      import * as consoleTheme from "../../../library/console-theme";

/* Helpers */         import { ResetPropertiesLibrary } from "../core/reset-library";


export const fills = new OperationModule("allFills", false, async () => {

  let scoreCard = {

    fill: 0

  };

  let fillLibrary = new ResetPropertiesLibrary();
  await fillLibrary.addNodesFromSelection();

  await fillLibrary.processEntries((node: SceneNode, reference: SceneNode, topLevel: boolean) => {

    if (type.isFigmaLayer(node) && node.type !== "GROUP" && type.isFigmaLayer(reference) && reference.type !== "GROUP") {

      scoreCard.fill += matchFill(node, reference);

    }

  });

  console.log(scoreCard);

  figma.notify("Process completed.", { timeout: 500 });

});

export const strokes = new OperationModule("allStrokes", false, async () => {

  let scoreCard = {

    strokes: 0

  };

  let strokeLibrary = new ResetPropertiesLibrary();
  await strokeLibrary.addNodesFromSelection();

  await strokeLibrary.processEntries((node: SceneNode, reference: SceneNode, topLevel: boolean) => {

    // Figma API does not allow changing of strokes on sections.
    if (type.isFigmaLayer(node) && node.type !== "GROUP" && node.type !== "SECTION" &&
        type.isFigmaLayer(reference) && reference.type !== "GROUP" && reference.type !== "SECTION") {

      scoreCard.strokes += matchStroke(node, reference);

    }

  });

  console.log(scoreCard);

  figma.notify("Process completed.", { timeout: 500 });

});




export function matchFill(node: Exclude<type.FigmaLayerNode, GroupNode>, reference: Exclude<type.FigmaLayerNode, GroupNode>): number {

  let reset = 0;

  // Check if an image fill exists.
  let fillsInNode = node.fills,
      imageExists = false;

  if (typeof fillsInNode !== "symbol") {

    for (let fill of fillsInNode) {

      if (fill.type === "IMAGE") {

        imageExists = true;
        break;

      }
    }
  }

  if (!imageExists) {

    // Reset variable.
    if (typeof reference.fillStyleId === "string" && reference.fillStyleId.length !== 0)  {

      if (node.fillStyleId === reference.fillStyleId) {

        // Do nothing.

      }

      else {

        node.fillStyleId = reference.fillStyleId;
        reset = 1;

      }
    }

    // Reset value.
    else {

      let nodeComparison = JSON.stringify(node.fills),
          referenceComparison = JSON.stringify(reference.fills);
      
      if (nodeComparison !== referenceComparison) {

        node.fills = reference.fills;
        reset = 1;

      }

    }

  }

  // Log changes to console.
  if (reset === 1)
    console.log(`%cFills reset for ${node.name}.`, consoleTheme.primary);

  return reset;

}


export function matchStroke(node: Exclude<type.FigmaLayerNode, GroupNode | SectionNode>, reference: Exclude<type.FigmaLayerNode, GroupNode | SectionNode>): number {

  let reset = 0;

  // Reset variable.
  if (typeof reference.strokeStyleId === "string" && reference.strokeStyleId.length !== 0)  {
    if (node.strokeStyleId === reference.strokeStyleId) {

      // Do nothing.

    }

    else {

      node.strokeStyleId = reference.strokeStyleId;
      reset = 1;

    }
  }

  // Reset value.
  else {

    let nodeComparison = JSON.stringify(node.fills),
        referenceComparison = JSON.stringify(reference.fills);
    
    if (nodeComparison !== referenceComparison) {

      node.strokes = reference.strokes;
      reset = 1;

    }

  }

  // Log changes to console.
  if (reset === 1)
    console.log(`%cStrokes reset for ${node.name}.`, consoleTheme.primary);

  return reset;

}