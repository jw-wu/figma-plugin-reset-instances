/* UI */              import * as core from "../../library/ui/system/core";
                      import * as consoleTheme from "../../library/console-theme";

/* Blocks */          import { UserInput } from "../../library/ui/blocks/userinput";

/* Components */      import { UIContainer } from "../../library/ui/system/types";
                      import { Button } from "../../library/ui/components/button/button";
                      import { Wrapper } from "../../library/ui/components/wrapper/wrapper";
                      import { Checkbox } from "../../library/ui/components/checkbox/checkbox";


// Log to console for debugging.
console.log("%cUI created.", "color: #ccc");

// Create UI.
let ui = new core.UI();

let dimensions = new UIContainer();
dimensions.node().textContent = "Dimensions";
dimensions.node().style.padding = "1.5rem 0.75rem 0.75rem";
dimensions.node().style.fontSize = "var(--typography-body2-size)";
dimensions.node().style.fontWeight = "700";

let width = new Checkbox({ size: "medium", primaryText: "Width" }),
    height = new Checkbox({ size: "medium", primaryText: "Height" }),
    maxWidth = new Checkbox({ size: "medium", primaryText: "Max-width" }),
    minWidth = new Checkbox({ size: "medium", primaryText: "Min-width" }),
    maxHeight = new Checkbox({ size: "medium", primaryText: "Max-height" }),
    minHeight = new Checkbox({ size: "medium", primaryText: "Min-height" });

let autoLayout = new UIContainer();
autoLayout.node().textContent = "Auto-layout";
autoLayout.node().style.padding = "1.5rem 0.75rem 0.75rem";
autoLayout.node().style.fontSize = "var(--typography-body2-size)";
autoLayout.node().style.fontWeight = "700";

let paddingTop = new Checkbox({ size: "medium", primaryText: "Top padding" }),
    paddingBottom = new Checkbox({ size: "medium", primaryText: "Bottom padding" }),
    paddingLeft = new Checkbox({ size: "medium", primaryText: "Left padding" }),
    paddingRight = new Checkbox({ size: "medium", primaryText: "Right padding" });

let itemSpacing = new Checkbox({ size: "medium", primaryText: "Item spacing" }),
    counterAxisSpacing = new Checkbox({ size: "medium", primaryText: "Counter axis spacing" });

let radius = new UIContainer();
radius.node().textContent = "Radius";
radius.node().style.padding = "1.5rem 0.75rem 0.75rem";
radius.node().style.fontSize = "var(--typography-body2-size)";
radius.node().style.fontWeight = "700";

let radiusTopLeft = new Checkbox({ size: "medium", primaryText: "Top left radius" }),
    radiusTopRight = new Checkbox({ size: "medium", primaryText: "Top right radius" }),
    radiusBottomRight = new Checkbox({ size: "medium", primaryText: "Bottom left radius" }),
    radiusBottomLeft = new Checkbox({ size: "medium", primaryText: "Bottom right radius" });

let others = new UIContainer();
others.node().textContent = "Others";
others.node().style.padding = "1.5rem 0.75rem 0.75rem";
others.node().style.fontSize = "var(--typography-body2-size)";
others.node().style.fontWeight = "700";

let fit = new Checkbox({ size: "medium", primaryText: "Fit" }),
    fill = new Checkbox({ size: "medium", primaryText: "Fill" }),
    stroke = new Checkbox({ size: "medium", primaryText: "Stroke" }),
    visibility = new Checkbox({ size: "medium", primaryText: "Visibility" }),
    mode = new Checkbox({ size: "medium", primaryText: "Modes" }),
    typography = new Checkbox({ size: "medium", primaryText: "Typography" });

let cta = new UIContainer({
  primary: new Button(
    "contained",
    "primary",
    "medium",
    "Reset instances",
    startPlugin,
    { hug: "fillContainer" })
});
cta.node().style.padding = "0.75rem";

let userInput = new UserInput({

  "dimensions": dimensions,
  
  "width": width,
  "height": height,
  "maxWidth": maxWidth,
  "minWidth": minWidth,
  "maxHeight": maxHeight,
  "minHeight": minHeight,

  "autoLayout": autoLayout,

  "paddingTop": paddingTop,
  "paddingBottom": paddingBottom,
  "paddingLeft": paddingLeft,
  "paddingRight": paddingRight,

  "itemSpacing": itemSpacing,
  "counterAxisSpacing": counterAxisSpacing,

  "radius": radius,

  "radiusTopLeft": radiusTopLeft,
  "radiusTopRight": radiusTopRight,
  "radiusBottomRight": radiusBottomRight,
  "radiusBottomLeft": radiusBottomLeft,

  "others": others,

  "fit": fit,
  "fill": fill,
  "stroke": stroke,
  "visibility": visibility,
  "mode": mode,
  "typography": typography,

  "cta": cta

});


ui.append([ userInput ]);


// Send height of UI to the plugin.
core.toPlugin({ command: "resize", args: { width: 320, height: 920 } });





function startPlugin(e: Event): void {

  let input = userInput.getAllInput();

  console.log("%cUser input received:", consoleTheme.primary);
  console.log(input);

  core.toPlugin({ command: "startResetting", args: { input: input } });

}