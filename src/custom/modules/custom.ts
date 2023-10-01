/* Types */           import * as type from "../../library/figma/system/typegroups";

/* System */          import { OperationModule } from "../../library/figma/system/modules";
                      import * as consoleTheme from "../../library/console-theme";

/* Helpers */         import { ResetPropertiesLibrary } from "./core/reset-library";

/* Modules */         import * as padding from "./components/padding";
                      import * as spacing from "./components/spacing";
                      import * as dimensions from "./components/dimension";
                      import * as fit from "./components/fit";
                      import * as radius from "./components/radius";
                      import * as visibilty from "./components/visibility";
                      import * as color from "./components/color";
                      import * as mode from "./components/mode";
                      import * as typography from "./components/typography";


export const module = new OperationModule("custom", true, async () => {

  // Show UI.
  figma.showUI(__uiFiles__.customProperties, { width: 250, height: 800, themeColors: true });

  // Listen for UI updates.
  figma.ui.onmessage = async (message) => {

    switch(message.command) {
      case "resize":
        figma.ui.resize(message.args.width, message.args.height);
        break;

      case "startResetting":
        await match(message.args.input);
        break;
    }

  }

});


async function match(input: { [ key: string ]: boolean }): Promise<void> {

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

    "Fills": 0,

    "Modes": 0

  };


  // Find out if any property except typography has been selected for a reset.
  let inputCheck = { ...input };
  delete inputCheck.typography;
  let userInputForNonTypoProperties = Object.values(inputCheck);

  if (userInputForNonTypoProperties.includes(true)) {

    let library = new ResetPropertiesLibrary();
    await library.addNodesFromSelection();

    await library.processEntries((node: SceneNode, reference: SceneNode, topLevel: boolean) => {

      if (type.isFigmaLayer(node) && type.isFigmaLayer(reference)) {

        scoreCard["Layers processed"] += 1;

        if (topLevel) {
    
          if (input.width && input.height) {
            let dimensionsReset = dimensions.matchWidthAndHeight(node, reference);
            scoreCard.dimensions.Width += dimensionsReset[0];
            scoreCard.dimensions.Height += dimensionsReset[1];
          }

          else if (input.width) {
            scoreCard.dimensions.Width += dimensions.matchWidth(node, reference);
          }

          else if (input.height) {
            scoreCard.dimensions.Width += dimensions.matchHeight(node, reference);
          }

          if (input.maxWidth)
            scoreCard.dimensions["Max-width"] += dimensions.matchMaxWidth(node, reference);

          if (input.minWidth)
            scoreCard.dimensions["Min-width"] += dimensions.matchMinWidth(node, reference);

          if (input.maxHeight)
            scoreCard.dimensions["Max-height"] += dimensions.matchMaxHeight(node, reference);
          
          if (input.minHeight)
            scoreCard.dimensions["Min-height"] += dimensions.matchMinHeight(node, reference);
    
          // Setting explicit variable modes on instance sublayers is currently unsupported in the Figma API.
          if (input.mode)
            scoreCard["Modes"] += mode.matchAll(node, reference);
    
        }

        if (input.visibility)
          scoreCard["Visibility"] += visibilty.match(node, reference);
    
        if (type.canAutolayout(node) && type.canAutolayout(reference)) {
    
          if (input.fit)
            scoreCard["Fit"] += fit.matchAll(node, reference);
    
          if (input.paddingTop)
            scoreCard.padding["Top"] += padding.matchTopPadding(node, reference);

          if (input.paddingBottom)
            scoreCard.padding["Bottom"] += padding.matchBottomPadding(node, reference);

          if (input.paddingLeft)
            scoreCard.padding["Left"] += padding.matchLeftPadding(node, reference);

          if (input.paddingRight)
            scoreCard.padding["Right"] += padding.matchRightPadding(node, reference);
    
          if (input.itemSpacing)
            scoreCard.spacing["Item spacing"] += spacing.matchItemSpacing(node, reference);

          if (input.counterAxisSpacing)
            scoreCard.spacing["Counter axis spacing"] += spacing.matchCounterAxisSpacing(node, reference);
          
        }

        if (radius.canHaveRadii(node) && radius.canHaveRadii(reference)) {
            
          if (input.radiusTopLeft)
            scoreCard.radius["Top left"] += radius.matchTopLeftRadius(node, reference);

          if (input.radiusTopRight)
            scoreCard.radius["Top right"] += radius.matchTopRightRadius(node, reference);

          if (input.radiusBottomRight)
            scoreCard.radius["Bottom right"] += radius.matchBottomRightRadius(node, reference);

          if (input.radiusBottomLeft)
            scoreCard.radius["Bottom left"] += radius.matchBottomLeftRadius(node, reference);

        }

        if (type.canBeFilled(node) && type.canBeFilled(reference)) {

          if (input.fill)
            scoreCard["Fills"] += color.matchFill(node, reference);

        }

        if (type.canBeStroked(node) && type.canBeStroked(reference)) {

          if (input.stroke)
            scoreCard["Strokes"] += color.matchStroke(node, reference);

        }
    
      }
    });
  }

  if (input.typography)
    await typography.matchAll(figma.currentPage.selection);

  console.log(scoreCard);

  figma.notify("Process completed.", { timeout: 500 });

}