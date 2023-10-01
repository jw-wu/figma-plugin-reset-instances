/* Types */           import { UIBlock, UIComponent } from "./types";


export class UI {

  protected panel: HTMLDivElement;
  

  constructor() {

    // Log to console for debugging.
    console.log("%cUI created.", "color: #ccc");

    let insertionPoint = document.getElementById("ui");
    this.panel = insertionPoint as HTMLDivElement;

    console.log(this.panel);

  }
  

  append(nodes: (UIBlock | UIComponent | HTMLDivElement)[]): void {

    // Append elements to a fragment before appending to the UI.
    let fragment = document.createDocumentFragment();

    for (let node of nodes) {
      if (node instanceof UIBlock || node instanceof UIComponent)
        fragment.appendChild(node.node());

      else
        fragment.appendChild(node);
    }

    this.panel.appendChild(fragment);

  }

}


// Send message to the plugin.
export function toPlugin(message: {
  command: string;
  args: { [key: string]: any };
}): void {

  parent.postMessage({ pluginMessage: message }, '*');

}