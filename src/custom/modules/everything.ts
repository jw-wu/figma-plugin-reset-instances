/* Types */           import * as type from "../../library/figma/system/typegroups";

/* System */          import { OperationModule } from "../../library/figma/system/modules";
                      import * as consoleTheme from "../../library/console-theme";
       
/* Components */      import { ResetPropertiesLibrary } from "./core/reset-library";
                      import * as padding from "./components/padding";
                      import * as spacing from "./components/spacing";
                      import * as dimensions from "./components/dimension";
                      import * as fit from "./components/fit";
                      import * as radius from "./components/radius";
                      import * as visibilty from "./components/visibility";
                      import * as color from "./components/color";
                      import * as mode from "./components/mode";
                      import * as typography from "./components/typography";


export const module = new OperationModule("everything", false, async () => {

  let scoreCard = {

    "Layers processed": 0,

    "Visibility": 0,

    "Fit": 0,

    dimensions: {
      "Width": 0, "Height": 0,
      "Max-width": 0, "Min-width": 0, "Max-height": 0, "Min-height": 0
    },

    padding: {
      "Top": 0, "Bottom": 0, "Left": 0, "Right": 0,
    },

    spacing: {
      "Item spacing": 0, "Counter axis spacing": 0,
    },

    radius: {
      "Top left": 0, "Top right": 0, "Bottom right": 0, "Bottom left": 0,
    },

    "Strokes": 0,

    "Modes": 0

  };

  let library = new ResetPropertiesLibrary();
  await library.addNodesFromSelection();

  await library.processEntries((node: SceneNode, reference: SceneNode, topLevel: boolean) => {

    if (type.isFigmaLayer(node) && type.isFigmaLayer(reference)) {

      scoreCard["Layers processed"] += 1;

      if (topLevel) {
  
        let dimensionsReset = dimensions.matchWidthAndHeight(node, reference);
        scoreCard.dimensions.Width += dimensionsReset[0];
        scoreCard.dimensions.Height += dimensionsReset[1];
        scoreCard.dimensions["Max-width"] += dimensions.matchMaxWidth(node, reference);
        scoreCard.dimensions["Min-width"] += dimensions.matchMinWidth(node, reference);
        scoreCard.dimensions["Max-height"] += dimensions.matchMaxHeight(node, reference);
        scoreCard.dimensions["Min-height"] += dimensions.matchMinHeight(node, reference);
  
        // Setting explicit variable modes on instance sublayers is currently unsupported in the Figma API.
        scoreCard["Modes"] += mode.matchAll(node, reference);
  
      }

      scoreCard["Visibility"] += visibilty.match(node, reference);
  
      if (type.canAutolayout(node) && type.canAutolayout(reference)) {
  
        scoreCard["Fit"] += fit.matchAll(node, reference);
  
        scoreCard.padding["Top"] += padding.matchTopPadding(node, reference);
        scoreCard.padding["Bottom"] += padding.matchBottomPadding(node, reference);
        scoreCard.padding["Left"] += padding.matchLeftPadding(node, reference);
        scoreCard.padding["Right"] += padding.matchRightPadding(node, reference);
  
        scoreCard.spacing["Item spacing"] += spacing.matchItemSpacing(node, reference);
        scoreCard.spacing["Counter axis spacing"] += spacing.matchCounterAxisSpacing(node, reference);
        
      }

      if (radius.canHaveRadii(node) && radius.canHaveRadii(reference)) {
          
        scoreCard.radius["Top left"] += radius.matchTopLeftRadius(node, reference);
        scoreCard.radius["Top right"] += radius.matchTopRightRadius(node, reference);
        scoreCard.radius["Bottom right"] += radius.matchBottomRightRadius(node, reference);
        scoreCard.radius["Bottom left"] += radius.matchBottomLeftRadius(node, reference);

      }

      if (type.canBeStroked(node) && type.canBeStroked(reference)) {

        scoreCard["Strokes"] += color.matchStroke(node, reference);

      }
  
    }

  });

  await typography.matchAll(figma.currentPage.selection);

  console.log(scoreCard);

  figma.notify("Process completed.", { timeout: 500 });

});