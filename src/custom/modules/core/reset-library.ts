/* Types */           import * as type from "../../../library/figma/system/typegroups";

/* System */          import * as consoleTheme from "../../../library/console-theme";

/* Helpers */         import * as component from "../../../plugins/figma/component";


export class ResetPropertiesLibrary {

  protected entries: {
    node: SceneNode;
    reference: SceneNode;
    topLevel: boolean;
  }[];
  protected completedEntries: number;
  protected catalogingCompleted: Function;
  protected processingCompleted: Function;


  constructor() {

    this.entries = [ ];

    this.completedEntries = 0;

    this.processingCompleted = () => { };
    this.catalogingCompleted = () => { };

  }


  async addNodesFromSelection(drillDeeper?: boolean): Promise<void> {

     // Get selected nodes.
    let selectedNodes = figma.currentPage.selection;

    await this.addNodesFromArray(selectedNodes, drillDeeper);

  }


  async addNodesFromArray(nodes: readonly SceneNode[], drillDeeper?: boolean): Promise<void> {

    drillDeeper = drillDeeper ?? true;

    console.log(`%cCataloging layers...`, consoleTheme.primary);
    figma.notify(`Cataloging layers...`, {
      timeout: 200,
      onDequeue: (reason) => {
        for (let node of nodes) {

          if (node.type === "INSTANCE") {
      
            let reference = node.mainComponent;
            if (reference!) {
      
              this.entries.push({ node: node, reference: reference, topLevel: true });
      
              if (type.isParentable(node) && type.isParentable(reference) && drillDeeper)
                this.catalogAllChildren(node, reference);

              this.catalogingCompleted();
      
            }      
          }
      
          else {
      
            let instanceAncestry = component.withinInstance(node);
            if (instanceAncestry.true) {
      
              // Get the source component of the parent instance.
              let instance = figma.currentPage.findOne((n) => (n.id === instanceAncestry.instanceId));
              if (instance?.type === "INSTANCE" && instance.mainComponent) {
      
                // Get the reference layer within the component.
                let reference: SceneNode = instance.mainComponent;
                for (let childIndex of instanceAncestry.path) {
      
                  if (type.isParentable(reference)) {
                    reference = reference.children[childIndex];
                  }
      
                }
      
                this.entries.push({ node: node, reference: reference, topLevel: false });
      
                if (type.isParentable(node) && type.isParentable(reference) && drillDeeper)
                  this.catalogAllChildren(node, reference);

                
                this.catalogingCompleted();
      
              }
            }
          }
        }
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

      console.log(`%cStoring ${parentNode.name}...`, consoleTheme.primary);

      let node = parentNode.children[i],
          reference = parentReference.children[i];

      this.entries.push({ node: node, reference: reference, topLevel: false });

      if (type.isParentable(node) && type.isParentable(reference))
        this.catalogAllChildren(node, reference);

    }
    
  }


  async processEntries(fn: Function): Promise<void> {

    console.log(`%cProcessing ${this.entries.length} layers...`, consoleTheme.primary);
    figma.notify(`Processing ${this.entries.length} layers...`, {
      timeout: 200,
      onDequeue: (reason) => {
        this.processThroughEntries(this.completedEntries, fn);
      }
    });

    await new Promise((resolve, reject) => {

      this.processingCompleted = resolve;

      // Set a timeout of 15 mins to reject the operation and close the plugin, in case the plugin hangs.
      setTimeout(reject, 900000);

    });

  }

  private processThroughEntries(entryIndex: number, fn: Function) {

    let entry = this.entries[entryIndex];

    if (entry) {

      console.log(`%cProcessing ${entry.node.name}... ${this.completedEntries + 1} / ${this.entries.length}`, consoleTheme.primary);
      figma.notify(`Processing ${entry.node.name}... ${this.completedEntries + 1} / ${this.entries.length}`, {
        timeout: 50,
        onDequeue: (reason) => {
          this.processEachEntry(entry, fn);
        }
      });
      
    }

    else {

      this.processingCompleted();

    }

  }

  private processEachEntry(entry: { node: SceneNode, reference: SceneNode, topLevel: boolean }, fn: Function): void {

    fn(entry.node, entry.reference, entry.topLevel);

    this.completedEntries += 1;

    this.processThroughEntries(this.completedEntries, fn);

  }
  
}