/* System */          import { OperationModule } from "../../../library/figma/system/modules";
                      import * as type from "../../../library/figma/system/typegroups";
                      import * as consoleTheme from "../../../library/console-theme";

/* Helpers */         import { ResetPropertiesLibrary } from "../core/reset-library";


// Type guard for layers that can have radii.
export type nodesWithRadius = Exclude< type.FigmaLayerNode, GroupNode | SectionNode | BooleanOperationNode | StarNode | EllipseNode | PolygonNode | VectorNode | TextNode >;
export const canHaveRadii = (node: SceneNode): node is nodesWithRadius => (
  node.type !== "GROUP" &&
  node.type !== "SECTION" &&
  node.type !== "BOOLEAN_OPERATION" &&
  node.type !== "STAR" &&
  node.type !== "ELLIPSE" &&
  node.type !== "POLYGON" &&
  node.type !== "VECTOR" &&
  node.type !== "TEXT"
);


export const all = new OperationModule("allRadii", false, async () => {

  let scoreCard = {

    radiusTopLeft: 0,
    radiusTopRight: 0,
    radiusBottomRight: 0,
    radiusBottomLeft: 0

  };

  let radiusLibrary = new ResetPropertiesLibrary();
  await radiusLibrary.addNodesFromSelection();

  await radiusLibrary.processEntries((node: SceneNode, reference: SceneNode) => {

    if (canHaveRadii(node) && canHaveRadii(reference)) {
      
      scoreCard.radiusTopLeft += matchTopLeftRadius(node, reference);
      scoreCard.radiusTopRight += matchTopRightRadius(node, reference);
      scoreCard.radiusBottomRight += matchBottomRightRadius(node, reference);
      scoreCard.radiusBottomLeft += matchBottomLeftRadius(node, reference);

    }
    
  });

  console.log(scoreCard);

  figma.notify("Process completed.", { timeout: 500 });

});


export function matchTopLeftRadius(node: nodesWithRadius, reference: nodesWithRadius): number {

  try {

    let reset = 0;

    // Reset variable.
    if (reference.boundVariables?.topLeftRadius) {
      if (node.boundVariables?.topLeftRadius?.id === reference.boundVariables.topLeftRadius.id) {

        // Do nothing.

      }

      else {
      
        node.setBoundVariable("topLeftRadius", reference.boundVariables.topLeftRadius.id);
        reset = 1;

      }
    }

    // Reset value.
    else if (node.topLeftRadius !== reference.topLeftRadius) {
      
      node.topLeftRadius = reference.topLeftRadius;
      reset = 1;

    }

    // Log changes to console.
    if (reset === 1)
      console.log(`%cTop left radius reset for ${node.name}.`, consoleTheme.primary);

    return reset;

  }

  catch(error) {

    // Nodes within instances cannot have their radius adjusted.
    return 0;

  }

}


export function matchTopRightRadius(node: nodesWithRadius, reference: nodesWithRadius): number {

  try {

    let reset = 0;

    // Reset variable.
    if (reference.boundVariables?.topRightRadius!) {
      if (node.boundVariables?.topRightRadius?.id === reference.boundVariables.topRightRadius.id) {

        // Do nothing.

      }

      else {

        node.setBoundVariable("topRightRadius", reference.boundVariables.topRightRadius.id);
        reset = 1;

      }
    }

    // Reset value.
    else if (node.topRightRadius !== reference.topRightRadius) {
      
      node.topRightRadius = reference.topRightRadius;
      reset = 1;

    }

    // Log changes to console.
    if (reset === 1)
      console.log(`%cTop right radius reset for ${node.name}.`, consoleTheme.primary);

    return reset;

  }

  catch(error) {

    // Nodes within instances cannot have their radius adjusted.
    return 0;

  }

}


export function matchBottomRightRadius(node: nodesWithRadius, reference: nodesWithRadius): number {

  try {

    let reset = 0;

    // Reset variable.
    if (reference.boundVariables?.bottomRightRadius) {
      if (node.boundVariables?.bottomRightRadius?.id === reference.boundVariables.bottomRightRadius.id) {

        // Do nothing.

      }

      else {

        node.setBoundVariable("bottomRightRadius", reference.boundVariables.bottomRightRadius.id);
        reset = 1;

      }
    }

    // Reset value.
    else if (node.bottomRightRadius !== reference.bottomRightRadius) {
      
      node.bottomRightRadius = reference.bottomRightRadius;
      reset = 1;

    }

    // Log changes to console.
    if (reset === 1)
      console.log(`%cBottom right radius reset for ${node.name}.`, consoleTheme.primary);

    return reset;

  }

  catch(error) {

    // Nodes within instances cannot have their radius adjusted.
    return 0;

  }

}


export function matchBottomLeftRadius(node: nodesWithRadius, reference: nodesWithRadius): number {

  try {

    let reset = 0;

    // Reset variable.
    if (reference.boundVariables?.bottomLeftRadius) {
      if (node.boundVariables?.bottomLeftRadius?.id === reference.boundVariables.bottomLeftRadius.id) {

        // Do nothing.

      }

      else {

        node.setBoundVariable("bottomLeftRadius", reference.boundVariables.bottomLeftRadius.id);
        reset = 1;

      }
    }

    // Reset value.
    else if (node.bottomLeftRadius !== reference.bottomLeftRadius) {
      
      node.bottomLeftRadius = reference.bottomLeftRadius;
      reset = 1;

    }

    // Log changes to console.
    if (reset === 1)
      console.log(`%cBottom left radius reset for ${node.name}.`, consoleTheme.primary);

    return reset;

  }

  catch(error) {

    // Nodes within instances cannot have their radius adjusted.
    return 0;

  }

}