/* Types */           import * as type from "../figma-typegroups";
/* Quick action */    import * as quickAction from "../figma-quickaction";
/* Modules */         import * as padding from "./padding";
                      import * as spacing from "./spacing";
                      import * as dimensions from "./dimension";
                      import * as radius from "./radius";
                      import * as visibilty from "./visibility";
                      import * as mode from "./mode";


export const everythingExceptContent = new quickAction.OperationModule("everythingExceptContent", main, "everything");
export const outermostInstanceOnlyExceptContent = new quickAction.OperationModule("outermostInstanceOnlyExceptContent", main, "outermostInstance");


function main(scope: string) {

  dimensions.all.run();
  padding.all.run();
  spacing.all.run();
  radius.all.run();
  visibilty.toggle.run();
  mode.all.run();

  if (scope === "everything") {

     // Get selected nodes.
    let userSelection = figma.currentPage.selection;

    for (let node of userSelection) {

      // Get only the instances.
      if (node.type === "INSTANCE") {

        // Get the source component of the instance.
        let mainComponent = node.mainComponent;
        if (mainComponent!) {
      
          matchChildren(node, mainComponent);
        
        }
      }
    }
  }
}


function matchChildren(node: type.ParentNode, refNode: type.ParentNode) {

  for (let i = 0, childrenCount = node.children.length; i < childrenCount; ++i) {

    let child = node.children[i],
        refChild = refNode.children[i];

    if (type.isFigmaLayer(child) && type.isFigmaLayer(refChild)) {

      // Match all variables of child to reference node.
      let variables = refChild.boundVariables;
      
      if (variables!.width!) child.setBoundVariable("width", variables!.width.id);
      if (variables!.height!) child.setBoundVariable("height", variables!.height.id);
      

      if (type.canAutolayout(child) && type.canAutolayout(refChild)) {

        if (variables!.paddingTop!) child.setBoundVariable("paddingTop", variables!.paddingTop.id);
        else child.paddingTop = refChild.paddingTop;
        
        if (variables!.paddingBottom!) child.setBoundVariable("paddingBottom", variables!.paddingBottom.id);
        child.paddingRight = refChild.paddingRight;
        
        if (variables!.paddingLeft!) child.setBoundVariable("paddingLeft", variables!.paddingLeft.id);
        child.paddingBottom = refChild.paddingBottom;
        
        if (variables!.paddingRight!) child.setBoundVariable("paddingRight", variables!.paddingRight.id);
        child.paddingLeft = refChild.paddingLeft;

        if (variables!.itemSpacing!) child.setBoundVariable("itemSpacing", variables!.itemSpacing.id);
        else child.itemSpacing = refChild.itemSpacing;

        if (variables!.counterAxisSpacing!) child.setBoundVariable("counterAxisSpacing", variables!.counterAxisSpacing.id);
        else child.counterAxisSpacing = refChild.counterAxisSpacing;
      }


      if (child.type !== "GROUP" && refChild.type !== "GROUP" &&
          child.type !== "SECTION" && refChild.type !== "SECTION" &&
          child.type !== "BOOLEAN_OPERATION" && refChild.type !== "BOOLEAN_OPERATION" &&
          child.type !== "STAR" && refChild.type !== "STAR" &&
          child.type !== "ELLIPSE" && refChild.type !== "ELLIPSE" &&
          child.type !== "POLYGON" && refChild.type !== "POLYGON" &&
          child.type !== "TEXT" && refChild.type !== "TEXT") {

        if (variables!.topLeftRadius!) child.setBoundVariable("topLeftRadius", variables!.topLeftRadius.id);
        else child.topLeftRadius = refChild.topLeftRadius;

        if (variables!.topRightRadius!) child.setBoundVariable("topRightRadius", variables!.topRightRadius.id);
        else child.topRightRadius = refChild.topRightRadius;

        if (variables!.bottomLeftRadius!) child.setBoundVariable("bottomLeftRadius", variables!.bottomLeftRadius.id);
        else child.bottomLeftRadius = refChild.bottomLeftRadius;

        if (variables!.bottomRightRadius!) child.setBoundVariable("bottomRightRadius", variables!.bottomRightRadius.id);
        else child.bottomRightRadius = refChild.bottomRightRadius;
      }


      if (variables!.visible!) child.setBoundVariable("visible", variables!.visible.id);
      else child.visible = refChild.visible;

    }

    // Drill through existing children and repeat.
    if (type.isParentable(child) && type.isParentable(refChild)) matchChildren(child, refChild);

  }
}