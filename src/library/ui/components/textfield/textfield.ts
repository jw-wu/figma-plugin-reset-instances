/* Types */             import { UIFormComponent } from "../../system/types";


export class TextField extends UIFormComponent {
    constructor(
      label: string,
      type: "text" | "integer",
      size: "small" | "medium" | "large",
      options?: {
        suffixLabel?: string,
        placeholder?: string,
        defaultText?: string
      }
    ) {

      super();

      this.inputLabel = document.createElement("div");

      // Component div.
      this.component.classList.add("component", "textfield");

      // Input label.
      this.inputLabel.classList.add("label");
      this.inputLabel.innerText = label;
      
      // Input field.
      let inputWrapper = document.createElement("div");
      inputWrapper.classList.add("inputwrapper");

      this.input = document.createElement("input");
      this.input.classList.add(size);
      this.input.type = type;
      if (options?.placeholder) this.input.placeholder = options.placeholder;
      if (options?.defaultText) this.input.value = options.defaultText;

      // Suffix label.
      if (options?.suffixLabel) {
        this.suffixLabel = document.createElement("div");
        this.suffixLabel.classList.add("suffixlabel");
        this.suffixLabel.textContent = options.suffixLabel;
      }

      // Helper/error text.
      this.helperText.classList.add("helpertext", "hidden");

      // Append all.
      this.component.appendChild(this.inputLabel);
      inputWrapper.appendChild(this.input);
      if (this.suffixLabel!) inputWrapper.appendChild(this.suffixLabel);
      this.component.appendChild(inputWrapper);
      this.component.appendChild(this.helperText);

      // Set up input retrieval.
      this.getInput = (): string => {
        return this.input.value;
      };

    }


    protected inputLabel: HTMLDivElement;
    protected input: HTMLInputElement;
    protected suffixLabel: HTMLDivElement | undefined;    


    setError(message: string): void {
      this.helperText.innerText = message;
      this.helperText.classList.remove("hidden");
    }

    clearError(): void {
      this.helperText.classList.add("hidden");
      setTimeout(() => {
        this.helperText.innerText = "";
      }, 250);
    }

    disable(): void {
      this.input.classList.add("disabled");
    }

    enable(): void {
      this.input.classList.remove("disabled");
    }

    setInput(input: string): void {
      this.input.value = input;
    }

}