export type FigmaLayerNode =
  FrameNode | ComponentSetNode | ComponentNode | InstanceNode | GroupNode | SectionNode |
  RectangleNode | EllipseNode | PolygonNode | StarNode | TextNode | BooleanOperationNode;
export const isFigmaLayer = (node: SceneNode): node is FigmaLayerNode => (
  node.type === "FRAME" ||
  node.type === "COMPONENT_SET" ||
  node.type === "COMPONENT" ||
  node.type === "INSTANCE" ||
  node.type === "GROUP" ||
  node.type === "SECTION" ||
  node.type === "RECTANGLE" ||
  node.type === "ELLIPSE" ||
  node.type === "POLYGON" ||
  node.type === "STAR" ||
  node.type === "TEXT" ||
  node.type === "BOOLEAN_OPERATION"
);

export type ParentNode = FrameNode | ComponentSetNode | ComponentNode | InstanceNode | GroupNode | SectionNode;
export const isParentable = (node: SceneNode): node is ParentNode => (
  node.type === "FRAME" ||
  node.type === "COMPONENT_SET" ||
  node.type === "COMPONENT" ||
  node.type === "INSTANCE" ||
  node.type === "GROUP" ||
  node.type === "SECTION"
);

export type ResizableNode =
  FrameNode | ComponentSetNode | ComponentNode | InstanceNode | GroupNode | SectionNode |
  RectangleNode | EllipseNode | PolygonNode | StarNode | TextNode | BooleanOperationNode;
export const isResizable = (node: SceneNode): node is ResizableNode => (
  node.type === "FRAME" ||
  node.type === "COMPONENT_SET" ||
  node.type === "COMPONENT" ||
  node.type === "INSTANCE" ||
  node.type === "GROUP" ||
  node.type === "SECTION" ||
  node.type === "RECTANGLE" ||
  node.type === "ELLIPSE" ||
  node.type === "POLYGON" ||
  node.type === "STAR" ||
  node.type === "TEXT" ||
  node.type === "BOOLEAN_OPERATION"
);

export type AutolayoutNode = 
  FrameNode | ComponentSetNode | ComponentNode | InstanceNode;
export const canAutolayout = (node: SceneNode): node is AutolayoutNode => (
  node.type === "FRAME" ||
  node.type === "COMPONENT_SET" ||
  node.type === "COMPONENT" ||
  node.type === "INSTANCE"
);