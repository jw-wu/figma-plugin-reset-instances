/* System */            import * as consoleTheme from "../../console-theme";

/* Types */             import { UIBlock, UIContainer, UIFormComponent, UINodeList } from "../system/types";

/* Components */        import { Button } from "../components/button/button";
                        import { Wrapper } from "../components/wrapper/wrapper";


type AllowedNodes = { [ key: string ]: UIFormComponent | Button | Wrapper | UIContainer };


export class UserInput extends UIBlock {

  constructor(nodes: AllowedNodes) {

    super(nodes);

  }


  // Adds an input child.
  addInputComponent(nodes: AllowedNodes): void {

    this.addChildren(nodes);
    
  }


  // Gets all input from children form components.
  getAllInput(): { [ key: string ]: any } {

    // Set up the result.
    let formInput: { [ key: string ]: any } = { };
    
    // Loop through ValidNodes.
    let nodeNames = Object.keys(this.children);
    for (let name of nodeNames) {

      let child = this.children[name];
      if (child instanceof UIFormComponent)
        formInput[name] = child.getInput();

    }

    return formInput;

  }

}