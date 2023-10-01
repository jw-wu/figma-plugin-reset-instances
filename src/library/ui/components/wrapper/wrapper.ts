import { UIComponent } from "../../system/types";

export class Wrapper extends UIComponent {
  constructor(
    children: UIComponent[],
    padding?: string | string[]
  ) {

    super();

    this.component = document.createElement("div");


    if (!padding) {
      this.component.style.padding = "0.75rem";
    }

    else if (typeof padding === "string")
      this.component.style.padding = padding;

    else if (padding.length === 1)
      this.component.style.padding = padding[0];
    
    else if (padding.length >= 2 && padding.length <= 4)
      this.component.style.padding = padding.join(" ");

      
    for (let child of children) {
      this.component.appendChild(child.node());
    }

  }

  children(): HTMLCollection {
    return this.component.children;
  }

}