// Class for storing quick action parameters for each module.
export class OperationModule {
  constructor(command: string, fn: Function, fixedParameters?: unknown) {
    this.command = command;
    this.userParameters = [ ];
    this.fn = fn;
    this.fixedParameters = fixedParameters;
  }

  private command: string; // Key for referral in code.
  private userParameters: string[]; // Allowed parameters for quick action taskbar.
  private fn: Function; // Function to run for starting operation.
  private fixedParameters: unknown; // Fixed parameters for the function.


  /*********************************************
  Methods for setting up quick action parameters.
  *********************************************/

  // Set parameters.
  setParameter(parameter: string): void {
    this.userParameters.push(parameter);
  }


  /*********************************************
  Methods for retrieving quick action parameters.
  *********************************************/

  // Get command.
  getCommand(): string {
    return this.command;
  }

  // Check if parameter exists.
  parameterExists(parameter: string): boolean {
    if (this.userParameters.indexOf(parameter) >= 0) return true;
    else return false;
  }

  // Retrieves a list of suggested parameters.
  getParameters(): string[] {
    return this.userParameters;
  }

  run(parameters?: ParameterValues): unknown {
    return this.fn(this.fixedParameters, parameters);
  }
}


export class ModuleLibrary {
  constructor() {
    this.modules = new Map();
  }

  private modules: Map<string, OperationModule>;

  loadModule(module: OperationModule): void {
    this.modules.set(module.getCommand(), module);
  }

  matchCommandToModule(command: string): OperationModule | null {
    let selectedModule = this.modules.get(command);
    if (selectedModule!) return selectedModule;
    else return null;
  }
}


// Load module data for displaying in the quick action taskbar.
export function loadModules(modules: OperationModule[]): ModuleLibrary | null {
  let library = new ModuleLibrary;
  
  if (modules.length > 0) {
    for (let module of modules) {
      library.loadModule(module);
      console.log(`%cModule loaded: ${module.getCommand()}`, "color: #ccc");
    }
    return library;
  }
  else {
    return null;
  }
}



export function getPaddingInput(parameters: ParameterValues): number[] {

  // Top, right, bottom, left padding values.
  let padding: number[] = [ ];

  // If there is input.
  if (parameters.padding!) {

    // Split the input into individual values.
    let paddingSplit: number[] = parameters.padding
      .replace(/\s/g, "")
      .split(",")
      .map((str: string) => Number(str));

    // Loop through individual values.
    for (let paddingValue of paddingSplit) {
      if (Number.isNaN(paddingValue)) {
        figma.notify("Padding needs to be a number.", { timeout: 5000, error: true });
        figma.closePlugin();
      }
    }

    // Map padding values to padding array.
    switch(paddingSplit.length) {
      case 1:
        padding = [ paddingSplit[0], paddingSplit[0], paddingSplit[0], paddingSplit[0] ];
        break;

      case 2:
        padding = [ paddingSplit[0], paddingSplit[1], paddingSplit[0], paddingSplit[1] ];
        break;

      case 3:
        padding = [ paddingSplit[0], paddingSplit[1], paddingSplit[2], paddingSplit[1] ];
        break;

      case 4:
        padding = [ paddingSplit[0], paddingSplit[1], paddingSplit[2], paddingSplit[3] ];
        break;

      default:
        figma.notify("The plugin accepts up to 4 values for padding.", { timeout: 5000, error: true });
        figma.closePlugin();
    }
  }

  // If there is no input.
  else padding = [ 0, 0, 0, 0 ];

  return padding;
}