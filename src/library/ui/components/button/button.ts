/* Types */             import { UIComponent } from "../../system/types";
                        import * as theme from "../../../../custom/ui-theme";

export class Button extends UIComponent {
    constructor(
      variant: theme.Variant,
      color: theme.Color,
      size: theme.Size,
      label: string,
      callback: Function,
      options?: {
        hug?: "fillContainer" | "hugContents",
        suffixIcon?: string
      }
    ) {

      super();

      this.label = document.createElement("div");
      if (options?.suffixIcon) this.suffixIcon = document.createElement("div");

      // Component div.
      this.component.classList.add("component", "button", variant, color, size, "enabled");
      if (options?.hug) this.component.classList.add(options.hug);

      // Label.
      this.label.classList.add("label");
      this.label.innerText = label;

      // Append all.
      this.component.appendChild(this.label);
      if (this.suffixIcon) this.component.appendChild(this.suffixIcon);

      this.component.addEventListener("click", (e) => { callback(e) });

      this.state = "enabled";

    }

    protected label: HTMLDivElement;
    protected suffixIcon?: HTMLDivElement;
    protected state: "enabled" | "disabled" | "error";
    


    error(): void {
      this.component.classList.remove(this.state);
      this.component.classList.add("error");
      this.state = "error";
    }

    disable(): void {
      this.component.classList.remove(this.state);
      this.component.classList.add("disabled");
      this.state = "disabled";
    }

    enable(): void {
      this.component.classList.remove(this.state);
      this.component.classList.add("enabled");
      this.state = "enabled";
    }

}