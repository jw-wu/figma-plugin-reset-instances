/* Types */           import * as type from "./figma-typegroups";
/* Quick action */    import * as quickAction from "./figma-quickaction";

/* Modules */         import * as padding from "./modules/padding";
                      import * as spacing from "./modules/spacing";
                      import * as dimension from "./modules/dimension";
                      import * as radius from "./modules/radius";
                      import * as visibilty from "./modules/visibility";
                      import * as mode from "./modules/mode";
                      import { everythingExceptContent, outermostInstanceOnlyExceptContent } from "./modules/everything-except-content";


// Log to console for debugging.
console.log("%cPlugin has started.", "color: #ccc");


// Load operation modules.
let modules = quickAction.loadModules([

  // Add modules to load below.
  padding.all, padding.top, padding.bottom, padding.left, padding.right,
  spacing.all, spacing.item, spacing.counterAxis,
  dimension.all, dimension.widthHeight, dimension.width, dimension.height,
  dimension.maxWidth, dimension.minWidth, dimension.maxHeight, dimension.minHeight,
  radius.all, radius.topLeft, radius.topRight, radius.bottomLeft, radius.bottomRight,
  visibilty.toggle, mode.all,
  everythingExceptContent, outermostInstanceOnlyExceptContent

]);


// When plugin is running.
figma.on("run", () => {

  // No modules loaded.
  if (!modules!) {
    figma.notify("No operation modules loaded.", { timeout: 5000, error: true });
    figma.closePlugin();
  }

  // Run module if it is found.
  if (modules!) {
    let selectedModule = modules.matchCommandToModule(figma.command);
    if (selectedModule!) selectedModule.run();
    figma.closePlugin();
  }

});