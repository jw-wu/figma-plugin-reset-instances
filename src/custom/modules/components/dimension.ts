/* System */          import { OperationModule } from "../../../library/figma/system/modules";
                      import * as type from "../../../library/figma/system/typegroups";
                      import * as consoleTheme from "../../../library/console-theme";

/* Helpers */         import { ResetPropertiesLibrary } from "../core/reset-library";


export const all = new OperationModule("allDimensions", false, async () => {

  let scoreCard = {

    width: 0,
    height: 0,
    maxWidth: 0,
    minWidth: 0,
    maxHeight: 0,
    minHeight: 0

  };

  let dimensionLibrary = new ResetPropertiesLibrary();
  await dimensionLibrary.addNodesFromSelection();

  await dimensionLibrary.processEntries((node: SceneNode, reference: SceneNode, topLevel: boolean): void => {

    if (type.isFigmaLayer(node) && type.isFigmaLayer(reference)) {

      let dimensionsReset = matchStandardDimensions("both", node, reference);
      scoreCard.width += dimensionsReset[0];
      scoreCard.height += dimensionsReset[1];
  
      if (topLevel) {
  
        scoreCard.maxWidth += matchMaxWidth(node, reference);
        scoreCard.minWidth += matchMinWidth(node, reference);
        scoreCard.maxHeight += matchMaxHeight(node, reference);
        scoreCard.minHeight += matchMinHeight(node, reference);
  
      }

    }
  });

  console.log(scoreCard);

  figma.notify("Process completed.", { timeout: 500 });

});


export function matchWidthAndHeight(node: type.FigmaLayerNode, reference: type.FigmaLayerNode): number[] {

  return matchStandardDimensions("both", node, reference);

}


export function matchWidth(node: type.FigmaLayerNode, reference: type.FigmaLayerNode): number {

  return matchStandardDimensions("widthOnly", node, reference)[0];

}


export function matchHeight(node: type.FigmaLayerNode, reference: type.FigmaLayerNode): number {

  return matchStandardDimensions("heightOnly", node, reference)[1];

}


function matchStandardDimensions(dimension: "both" | "widthOnly" | "heightOnly", node: type.FigmaLayerNode, reference: type.FigmaLayerNode): number[] {

  let reset = [ 0, 0 ];

  let newWidth = node.width,
      newHeight = node.height,
      varWidth = "",
      varHeight = "";

  // Width.
  if (dimension !== "heightOnly") {

    // Reset variable.
    if (reference.boundVariables?.width) {
      if (node.boundVariables?.width?.id === reference.boundVariables.width.id) {

        // Do nothing.

      }

      else {

        varWidth = reference.boundVariables.width.id;
        reset[0] = 1;

      }
    }

    // Reset value.
    else if (node.width !== reference.width) {

      newWidth = reference.width;
      reset[0] = 1;
      
    }

  }

  // Height.
  if (dimension !== "widthOnly") {

    // Reset variable.
    if (reference.boundVariables?.height) {
      if (node.boundVariables?.height?.id === reference.boundVariables.height.id) {

        // Do nothing.

      }

      else {

        varHeight = reference.boundVariables.height.id;
        reset[1] = 1;

      }
    }

    // Reset value.
    else if (node.height !== reference.height) {
      
      newHeight = reference.height;
      reset[1] = 1;

    }

  }
  
  // Resize.
  if (node.type === "SECTION") node.resizeWithoutConstraints(newWidth, newHeight);
  else if (node.type !== "GROUP") node.resize(newWidth, newHeight);

  // Apply variables.
  if (varWidth.length !== 0) node.setBoundVariable("width", varWidth);
  if (varHeight.length !== 0) node.setBoundVariable("height", varHeight);
  
  // Log changes to console.
  if (reset[0] === 1)
    console.log(`%cWidth reset for ${node.name}.`, consoleTheme.primary);

  if (reset[1] === 1)
    console.log(`%cHeight reset for ${node.name}.`, consoleTheme.primary);


  return reset;

}


export function matchMaxWidth(node: type.FigmaLayerNode, reference: type.FigmaLayerNode): number {

  try {

    let reset = 0;

    // Reset variable.
    if (reference.boundVariables?.maxWidth) {
      if (node.boundVariables?.maxWidth?.id === reference.boundVariables.maxWidth.id) {

        // Do nothing.

      }

      else {

        node.setBoundVariable("maxWidth", reference.boundVariables.maxWidth.id);
        reset = 1;

      }
    }
    
    // Reset value.
    else if (node.maxWidth !== reference.maxWidth) {
      
      node.maxWidth = reference.maxWidth;
      reset = 1;

    }

    // Log changes to console.
    if (reset === 1)
      console.log(`%cMax-width reset for ${node.name}.`, consoleTheme.primary);

    return reset;

  }

  catch(error) {

    // Nodes within instances cannot have their max-widths adjusted.
    return 0;

  }

}


export function matchMinWidth(node: type.FigmaLayerNode, reference: type.FigmaLayerNode): number {

  try {

    let reset = 0;

    // Reset variable.
    if (reference.boundVariables?.minWidth!) {
      if (node.boundVariables?.minWidth?.id === reference.boundVariables.minWidth.id) {

        // Do nothing.
      
      }

      else {

        node.setBoundVariable("minWidth", reference.boundVariables.minWidth.id);
        reset = 1;

      }
    }

    // Reset value.
    else if (node.minWidth !== reference.minWidth) {
      
      node.minWidth = reference.minWidth;
      reset = 1;

    }

    // Log changes to console.
    if (reset === 1)
      console.log(`%cMin-width reset for ${node.name}.`, consoleTheme.primary);

    return reset;

  }

  catch(error) {

    // Nodes within instances cannot have their min-widths adjusted.
    return 0;

  }

}


export function matchMaxHeight(node: type.FigmaLayerNode, reference: type.FigmaLayerNode): number {

  try {

    let reset = 0;

    // Reset variable.
    if (reference.boundVariables?.maxHeight!) {
      if (node.boundVariables?.maxHeight?.id === reference.boundVariables.maxHeight.id) {

        // Do nothing.

      }

      else {

        node.setBoundVariable("maxHeight", reference.boundVariables.maxHeight.id);
        reset = 1;

      }
    }

    // Reset value.
    else if (node.maxHeight !== reference.maxHeight) {
      
      node.maxHeight = reference.maxHeight;
      reset = 1;

    }

    // Log changes to console.
    if (reset === 1)
      console.log(`%cMax-height reset for ${node.name}.`, consoleTheme.primary);

    return reset;

  }

  catch(error) {

    // Nodes within instances cannot have their max-height adjusted.
    return 0;

  }

}


export function matchMinHeight(node: type.FigmaLayerNode, reference: type.FigmaLayerNode): number {

  try {

    let reset = 0;

    // Reset variable.
    if (reference.boundVariables?.minHeight!) {
      if (node.boundVariables?.minHeight?.id === reference.boundVariables.minHeight.id) {

        // Do nothing.

      }

      else {

        node.setBoundVariable("minHeight", reference.boundVariables.minHeight.id);
        reset = 1;

      }
    }
    
    // Reset value.
    else if (node.minHeight !== reference.minHeight) {
      
      node.minHeight = reference.minHeight;
      reset = 1;

    }

    // Log changes to console.
    if (reset === 1)
      console.log(`%cMin-height reset for ${node.name}.`, consoleTheme.primary);

    return reset;

  }

  catch(error) {

    // Nodes within instances cannot have their min-height adjusted.
    return 0;

  }

}