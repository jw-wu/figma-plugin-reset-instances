/* System */                import * as consoleTheme from "../../console-theme";

/* Components */            import { Wrapper } from "../components/wrapper/wrapper";
                            import { Button } from "../components/button/button";
                            import { TextField } from "../components/textfield/textfield";



export type UINodeList = { [ key: string ]:  UIComponent | UIBlock | UIContainer };



// Generic component class that all UIComponents are extended from.
export class UIComponent {

  protected component: HTMLDivElement;


  constructor() {

    this.component = document.createElement("div");

  }


  // Gets the HTML node of the component.
  node(): HTMLDivElement {

    return this.component;

  }
}



// Generic class that all form componenets are extended from.
export class UIFormComponent extends UIComponent {

  protected helperText: HTMLDivElement;
  protected state: "enabled" | "disabled" | "error";
  public getInput: Function;


  constructor() {

    super();

    this.component.classList.add("input-element");

    // Creates a helper text div. The component should add this in the right place or it will not appear.
    this.helperText = document.createElement("div");
    this.helperText.classList.add("helpertext", "hidden");

    this.state = "enabled";

    this.getInput = () => { console.log("No functions defined yet.", consoleTheme.error) };

  }


  // Sets the component state to disabled.
  disable(): void {

    this.component.classList.remove("enabled", "error");
    this.component.classList.add("disabled");

    this.state = "disabled";

  }


  // Sets the component state to enabled.
  enable(): void {

    this.component.classList.remove("disabled", "error");
    this.component.classList.add("enabled");

    this.state = "enabled";

  }


  // Sets the component state to error.
  error(message: string) {

    this.component.classList.remove("enabled", "disabled");
    this.component.classList.add("error");

    this.state = "error";

    this.helperText.textContent = message;

  }

}



// Generic block class that all UIBlocks are extended from.
export class UIBlock {

  protected block: HTMLDivElement;
  protected children: UINodeList;


  constructor(nodes?: UINodeList) {

    this.block = document.createElement("div");
    this.block.classList.add("block");

    this.children = { };

    if (nodes)
      this.addChildren(nodes);

  }


  // Returns self.
  node(): HTMLDivElement {

    return this.block;

  }


  // Returns a HTMLElement.
  getChildNode(nodeName: string): Node | null {

    let child = this.children[nodeName];

    if (!child)
      return null;

    else
      return child.node();

  }


  // Returns the child as-is, if found.
  getChild(nodeName: string): UIBlock | UIComponent | UIContainer | null {

    return this.children[nodeName] || null;

  }


  // Adds a child to the DOM and the list.
  addChildren(nodes: UINodeList): void {

    let nodeNames = Object.keys(nodes);

    // Loop through UINodeList.
    for (let name of nodeNames) {

      let newChild = nodes[name];

      // If entry in the UINodeList is a UIBlock or UIComponent.
      if (newChild instanceof UIBlock || newChild instanceof UIComponent || newChild instanceof UIContainer)
        this.block.appendChild(newChild.node());
      
      else
        console.log(`%cError appending child to Block. ${name} is not of a valid type.`, consoleTheme.error);

      // Add it to the children list.
      this.children[name] = nodes[name];

    }

  }

}



// Generic container div to put any content.
export class UIContainer {

  protected container: HTMLDivElement;
  protected children: { [ key: string ]: UIComponent | HTMLElement };


  constructor(nodes?: { [ key: string ]: UIComponent | HTMLElement }) {
    
    this.container = document.createElement("div");
    this.container.classList.add("container");

    this.children = { };

    if (nodes)
      this.addChildren(nodes);

  }


  // Returns self.
  node(): HTMLDivElement {

    return this.container;

  }


  // Returns a HTMLElement.
  getChildNode(nodeName: string): Node | null {

    let child = this.children[nodeName];

    if (!child)
      return null;

    else if (child instanceof UIBlock || child instanceof UIComponent)
      return child.node();

    else
      return child;

  }


  // Returns the child as-is, if found.
  getChild(nodeName: string): UIBlock | UIComponent | HTMLElement | null {

    return this.children[nodeName] || null;
    
  }


  // Adds a child to the DOM and the list.
  addChildren(nodes: { [ key: string ]: UIComponent | HTMLElement }): void {

    let nodeNames = Object.keys(nodes);

    // Loop through UINodeList.
    for (let name of nodeNames) {

      let newChild = nodes[name];

      // If entry in the UINodeList is a UIBlock or UIComponent.
      if (newChild instanceof UIBlock || newChild instanceof UIComponent)
        this.container.appendChild(newChild.node());

      else
        console.log(`%cError appending child to Container. ${name} is not of a valid type.`, consoleTheme.error);

      // Add it to the children list.
      this.children[name] = nodes[name];

    }

  }

}



export class UIFragment {
  constructor(nodes: UINodeList) {

    this.fragment = document.createDocumentFragment();

    let nodeNames = Object.keys(nodes);
    for (let nodeName of nodeNames) this.fragment.appendChild(nodes[nodeName].node());

  }

  protected fragment: DocumentFragment;

  addNodes(node: (UIBlock | UIComponent)[]): void {

  }

  publishTo(node: Node): void {
    if (node.nodeType === Node.ELEMENT_NODE) node.appendChild(this.fragment);
    else console.log(`%cError appending fragment to node. Node is not a valid DOM element.`, "color: #f30;");
  }
}