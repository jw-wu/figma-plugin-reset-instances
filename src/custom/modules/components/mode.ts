/* System */          import { OperationModule } from "../../../library/figma/system/modules";
                      import * as type from "../../../library/figma/system/typegroups";
                      import * as consoleTheme from "../../../library/console-theme";

/* Helpers */         import { ResetPropertiesLibrary } from "../core/reset-library";


export const all = new OperationModule("allModes", false, async () => {

  let scoreCard = {

    mode: 0

  };

  let modeLibrary = new ResetPropertiesLibrary();
  await modeLibrary.addNodesFromSelection();

  await modeLibrary.processEntries((node: SceneNode, reference: SceneNode) => {

    if (type.isFigmaLayer(node) && type.isFigmaLayer(reference))
      scoreCard.mode += matchAll(node, reference);
    
  });

  console.log(scoreCard);

  figma.notify("Process completed.", { timeout: 500 });

});


export function matchAll(node: type.FigmaLayerNode, reference: type.FigmaLayerNode): number {

  // Setting explicit variable modes on instance sublayers is currently unsupported.
  try {

    let reset = 0;

    let referenceCollectionsNames = Object.keys(reference.explicitVariableModes),
        referenceCollectionCount = referenceCollectionsNames.length;

    // If there are explicitly set variables in the reference object.
    if (referenceCollectionCount !== 0) {

      for (let i = 0; i < referenceCollectionCount; ++i) {

        let collectionId = referenceCollectionsNames[i],
            modeId = reference.explicitVariableModes[collectionId];

        if (node.explicitVariableModes[collectionId] !== modeId) {

          node.setExplicitVariableModeForCollection(collectionId, modeId);
          reset = 1;

        }

      }

    }

    // Log changes to console.
    if (reset === 1)
      console.log(`%cModes reset for ${node.name}.`, consoleTheme.primary);

    return reset;

  }
  
  catch(error) {

    console.log(`%c${error}`, consoleTheme.error);
    figma.notify("Explicit modes may have been set on some layers. Figma does not yet support resetting these modes from the plugin.");

    return 0;

  }

}