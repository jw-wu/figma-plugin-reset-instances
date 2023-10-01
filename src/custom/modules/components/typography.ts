/* System */          import { OperationModule } from "../../../library/figma/system/modules";
                      import * as type from "../../../library/figma/system/typegroups";
                      import * as consoleTheme from "../../../library/console-theme";

/* Helpers */         import * as component from "../../../plugins/figma/component";


export const all = new OperationModule("typography", false, async () => {

  await matchAll(figma.currentPage.selection);

});


export async function matchAll(nodes: readonly SceneNode[]): Promise<void> {

  let library = new ResetTypographyLibrary();
  await library.addNodesFromArray(nodes, true);

  await library.processEntries();

}


export class ResetTypographyLibrary {

  protected nodesWithoutStyle: {
    [ key: string ]: {
      font: FontName;
      nodes: { id: string, referenceId: string }[];
    }
  };
  protected nodesWithStyle: {
    [ key: string ]: { // Style id
      font: FontName;
      nodes: { id: string, referenceId: string }[];
    }
  };
  protected nodesWithMissingFonts: {
    name: string;
    id: string;
  }[];
  protected nodesWithMultipleFonts: {
    name: string;
    id: string;
  }[];
  protected catalogingCompleted: Function;
  protected processingCompleted: Function;


  constructor() {

    this.nodesWithoutStyle = { };
    this.nodesWithStyle = { };
    this.nodesWithMissingFonts = [ ];
    this.nodesWithMultipleFonts = [ ];

    this.catalogingCompleted = () => { };
    this.processingCompleted = () => { };

  }


  async addNodesFromSelection(drillDeeper?: boolean): Promise<void> {

    // Get selected nodes.
    let selectedNodes = figma.currentPage.selection;

    await this.addNodesFromArray(selectedNodes, drillDeeper);

  }


  async addNodesFromArray(nodes: readonly SceneNode[], drillDeeper?: boolean): Promise<void> {

    drillDeeper = drillDeeper ?? true;

    console.log(`%cCataloging typography layers...`, consoleTheme.primary);
    figma.notify(`Cataloging typography layers...`, {
      timeout: 200,
      onDequeue: (reason) => {
        
        for (let node of nodes) {

          // Text nodes cannot be instances, so get text node as children if an instance is received.
          if (node.type === "INSTANCE") {

            let parentReference = node.mainComponent;

            if (parentReference) {

              if (drillDeeper)
                this.catalogAllChildren(node, parentReference);

              else {

                let childrenCount = node.children.length;

                for (let i = 0; i < childrenCount; ++i) {

                  let child = node.children[i],
                      reference = parentReference.children[i];

                  if (child.type === "TEXT" && reference.type === "TEXT")
                    this.catalogNode(child, reference);

                }
              }
            }
          }

          // Add node in if it is a text layer, but only if it is within an instance.
          else {

            let instanceAncestry = component.withinInstance(node);
            if (instanceAncestry.true) {
      
              // Get the source component of the parent instance.
              let instance = figma.currentPage.findOne((n) => (n.id === instanceAncestry.instanceId));
              if (instance?.type === "INSTANCE" && instance.mainComponent) {
      
                // Get the reference layer within the component.
                let reference: SceneNode = instance.mainComponent;
                for (let childIndex of instanceAncestry.path) {
      
                  if (type.isParentable(reference))
                    reference = reference.children[childIndex];
      
                }

                if (node.type === "TEXT" && reference.type === "TEXT")
                  this.catalogNode(node, reference);
      
                // Dig deeper if node is a parent.      
                if (type.isParentable(node) && type.isParentable(reference) && drillDeeper)
                  this.catalogAllChildren(node, reference);
      
              }
            }
          }
        }

        this.catalogingCompleted();
      }
    });

    await new Promise((resolve, reject) => {

      this.catalogingCompleted = resolve;

      // Set a timeout of 5 mins to reject the operation and close the plugin, in case the plugin hangs.
      setTimeout(reject, 300000);

    });

  }


  private catalogAllChildren(parentNode: type.ParentNode, parentReference: type.ParentNode): void {

    let childrenCount = parentNode.children.length;
    for (let i = 0; i < childrenCount; ++i) {

      console.log(`%cCataloging ${parentNode.name}...`, consoleTheme.primary);

      let node = parentNode.children[i],
          reference = parentReference.children[i];

      if (node.type === "TEXT" && reference.type === "TEXT")
        this.catalogNode(node, reference);

      else if (type.isParentable(node) && type.isParentable(reference))
        this.catalogAllChildren(node, reference);

    }
    
  }

  
  private catalogNode(node: TextNode, reference: TextNode): void {

    // If missing fonts exists, log the node to the class.
    if (node.hasMissingFont)
      this.nodesWithMissingFonts.push({ name: node.name, id: node.id });

    else {

      if (reference.type === "TEXT" && this.isFontName(reference.fontName)) {

        // If reference contains multiple fonts, log the node to the class, as it'd be impossible to know how to style the text.
        let referenceFonts = reference.getRangeAllFontNames(0, reference.characters.length);
        
        if (referenceFonts.length > 1)
          this.nodesWithMultipleFonts.push({ name: node.name, id: node.id });

        else {

          let fontFullName = [ reference.fontName.family, reference.fontName.style ].join(" ");

          // If text is linked to a text style, log it into nodesWithStyle.
          if (typeof reference.textStyleId === "string" && reference.textStyleId.length !== 0) {

            if (node.textStyleId !== reference.textStyleId) {

              // Create an entry if none exists.
              if (!this.nodesWithStyle[reference.textStyleId])
                this.nodesWithStyle[reference.textStyleId] = {
                  font: reference.fontName,
                  nodes: [ { id: node.id, referenceId: reference.id } ]
                };

              // Otherwise push in the node id.
              else {
                this.nodesWithStyle[reference.textStyleId].nodes.push({ id: node.id, referenceId: reference.id });
              }

            }
          }

          // Else add it to nodesWithoutStyle.
          else if (node.fontName !== reference.fontName) {
    
            // Create an entry if none exists.
            if (!this.nodesWithoutStyle[fontFullName])
              this.nodesWithoutStyle[fontFullName] = {
                font: reference.fontName,
                nodes: [ { id: node.id, referenceId: reference.id } ]
              };

            // Otherwise push in the node id.
            else {
              this.nodesWithoutStyle[fontFullName].nodes.push({ id: node.id, referenceId: reference.id });
            }

          }
        }
      }
    }

  }


  async processEntries(): Promise<void> {

    console.log(`%cProcessing typography layers...`, consoleTheme.primary);
    figma.notify(`Processing typography layers...`, {
      timeout: 100,
      onDequeue: async (reason) => {

        // Reset nodes with styles.
        await this.resetNodesWithStyles();

        // Reset nodes without styles.
        await this.resetNodesWithoutStyles();    

        // Logs nodes with errors.
        let missingFontsNodes: string[] = [ ],
            multipleFontsNodes: string[] = [ ];

        let errorNodes = this.getMissingFontNodes();
        for (let errorNode of errorNodes) {
          missingFontsNodes.push(errorNode.name);
        }

        errorNodes = this.getMultipleFontNodes();
        for (let errorNode of errorNodes) {
          multipleFontsNodes.push(errorNode.name);
        }


        console.log("%cTypography processed.", consoleTheme.primary);

        if (missingFontsNodes.length !== 0) {
          console.log(`%cThe following layers contain missing fonts: ${missingFontsNodes.join(", ")}.`, consoleTheme.error);
          figma.notify(`The following layers contain missing fonts: ${missingFontsNodes.join(", ")}.`, { error: true, timeout: 5000 });
        }
      
        if (multipleFontsNodes.length !== 0) {
          console.log(`%cThe following layers contain multiple fonts: ${multipleFontsNodes.join(", ")}.`, consoleTheme.error);
          figma.notify(`The following layers contain multiple fonts: ${multipleFontsNodes.join(", ")}.`, { error: true, timeout: 5000 });
        }

        this.processingCompleted();

      }
    });

    await new Promise((resolve, reject) => {

      this.processingCompleted = resolve;

      // Set a timeout of 15 mins to reject the operation and close the plugin, in case the plugin hangs.
      setTimeout(reject, 900000);

    });

  }


  private async resetNodesWithStyles(): Promise<void> {

    let styleIds = Object.keys(this.nodesWithStyle);
    if (styleIds.length !== 0) {

      let loadFonts: Promise<void>[] = [ ];

      // Load fonts.
      for (let styleId of styleIds) {
        loadFonts.push(figma.loadFontAsync(this.nodesWithStyle[styleId].font));
      }

      await Promise.all(loadFonts);
      console.log(`%c${loadFonts.length} fonts loaded.`, consoleTheme.secondary);
      
      // Reset nodes.
      for (let styleId of styleIds) {
        let collectedNodes = this.nodesWithStyle[styleId].nodes;
        
        for (let collectedNode of collectedNodes) {

          let node = figma.currentPage.findOne((n) => n.id === collectedNode.id),
              reference = figma.currentPage.findOne((n) => n.id === collectedNode.referenceId);
          
          if (node?.type === "TEXT" && reference?.type === "TEXT") {

            node.textStyleId = styleId;
            node.textAlignHorizontal = reference.textAlignHorizontal;
            node.textAlignVertical = reference.textAlignVertical;
            node.textAutoResize = reference.textAutoResize;
            node.textTruncation = reference.textTruncation;
            node.maxLines = reference.maxLines;

            console.log(`%cText style reset for ${node.name}.`, consoleTheme.primary);

          }
        }
      }
    }

  }


  private async resetNodesWithoutStyles(): Promise<void> {

    let withoutStyleFontFullNames = Object.keys(this.nodesWithoutStyle);
    if (withoutStyleFontFullNames.length !== 0) {

      let loadFonts: Promise<void>[] = [ ];

      // Load fonts.
      for (let fontFullName of withoutStyleFontFullNames) {
        loadFonts.push(figma.loadFontAsync(this.nodesWithoutStyle[fontFullName].font));
      }

      await Promise.all(loadFonts);
      console.log(`%c${loadFonts.length} fonts loaded.`, consoleTheme.secondary);
      
      // Reset nodes.
      for (let fontFullName of withoutStyleFontFullNames) {
        let fontName = this.nodesWithoutStyle[fontFullName].font,
            collectedNodes = this.nodesWithoutStyle[fontFullName].nodes;
        
        for (let collectedNode of collectedNodes) {

          let node = figma.currentPage.findOne((n) => n.id === collectedNode.id),
              reference = figma.currentPage.findOne((n) => n.id === collectedNode.referenceId);
          if (node?.type === "TEXT" && reference?.type === "TEXT") {

            node.fontName = fontName;
            node.textAlignHorizontal = reference.textAlignHorizontal;
            node.textAlignVertical = reference.textAlignVertical;
            node.textAutoResize = reference.textAutoResize;
            node.textTruncation = reference.textTruncation;
            node.maxLines = reference.maxLines;
            node.paragraphIndent = reference.paragraphIndent;
            node.paragraphSpacing = reference.paragraphSpacing;
            node.listSpacing = reference.listSpacing;
            node.hangingPunctuation = reference.hangingPunctuation;
            node.hangingList = reference.hangingList;
            node.fontSize = reference.fontSize;
            node.textCase = reference.textCase;
            node.textDecoration = reference.textDecoration;
            node.letterSpacing = reference.letterSpacing;
            node.lineHeight = reference.lineHeight;
            node.leadingTrim = reference.leadingTrim;

            console.log(`%cFont reset for ${node.name}.`, consoleTheme.primary);

          }
        }
      }
    }

  }


  getMissingFontNodes(): { name: string, id: string }[] {
    return this.nodesWithMissingFonts;
  }


  getMultipleFontNodes(): { name: string, id: string }[] {
    return this.nodesWithMultipleFonts;
  }


  private isFontName(object: any): object is FontName {
    return "family" in object;
  }

}