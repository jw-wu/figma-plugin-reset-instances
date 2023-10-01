/* Types */           import * as type from "./system/typegroups";

/* Theme */           import * as theme from "../console-theme";

/* Modules */         import * as modules from "./system/modules";
                      import { library } from "../../custom/module-library"; 


// Log to console for debugging.
console.log("%cPlugin has started.", "color: #ccc");


// Load modules.
let pluginModules = modules.load(library);


// Set suggestions for input parameters.
figma.parameters.on("input", ({ parameters, key, result }: ParameterInputEvent) => {

  if (pluginModules) {
    let selectedModule = pluginModules.matchCommandToModule(figma.command);
    if (selectedModule) result.setSuggestions(selectedModule.getParameterSuggestions(key));
  }

});


// When plugin is running.
figma.on("run", async ({ parameters }: RunEvent) => {

  // Log user input to console.
  if (parameters) {
    console.log(`%cUser input logged:`, "color: #ccc");
    console.log(parameters);
  }

  // No modules loaded.
  if (!pluginModules) {
    figma.notify("No operation modules loaded.", { timeout: 5000, error: true });
    figma.closePlugin();
  }

  // Run module if it is found.
  if (pluginModules) {
    let selectedModule = pluginModules.matchCommandToModule(figma.command);
    
    if (selectedModule) {
      if (selectedModule.isAsync) await selectedModule.run(parameters);
      else selectedModule.run(parameters);

      if (!selectedModule.hasUI) figma.closePlugin();
    }

    else {
      figma.notify("Selected operation has no corresponding module loaded! Closing plugin...", { timeout: 5000, error: true });
      figma.closePlugin();
    }
  }

  // If no input has been received.
  else figma.closePlugin();

});