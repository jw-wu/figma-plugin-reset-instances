export type FigmaLayerNode =
  FrameNode | ComponentSetNode | ComponentNode | InstanceNode | GroupNode | SectionNode |
  RectangleNode | EllipseNode | PolygonNode | StarNode | VectorNode | TextNode | BooleanOperationNode;
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
  node.type === "VECTOR" ||
  node.type === "TEXT" ||
  node.type === "BOOLEAN_OPERATION"
);

export type ResizableNode = FigmaLayerNode;
export const isResizable = (node: SceneNode): node is ResizableNode => (
  isFigmaLayer(node)
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

export type AutolayoutNode = Exclude<ParentNode, GroupNode | SectionNode>;
export const canAutolayout = (node: SceneNode): node is AutolayoutNode => (
  isFigmaLayer(node) &&
  (
    node.type !== "GROUP" &&
    node.type !== "SECTION"
  )
);

export type FillableNode = Exclude<FigmaLayerNode, GroupNode>;
export const canBeFilled = (node: SceneNode): node is FillableNode => (
  isFigmaLayer(node) &&
  node.type !== "GROUP"
);

export type StrokableNode = Exclude<FigmaLayerNode, GroupNode | SectionNode>;
export const canBeStroked = (node: SceneNode): node is StrokableNode => (
  isFigmaLayer(node) && 
  (
    node.type !== "GROUP" &&
    node.type !== "SECTION"
  )
);