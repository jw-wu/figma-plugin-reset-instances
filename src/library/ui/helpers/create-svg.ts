export function icon(width: number, height: number, d: string, fill: string): SVGSVGElement {
  
  let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

  svg.setAttribute("width", String(width));
  svg.setAttribute("height", String(height));
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  svg.setAttribute("style", `fill: ${fill};`);

  let path = document.createElementNS("http://www.w3.org/2000/svg", "path");

  path.setAttribute("fill-rule", "evenodd");
  path.setAttribute("clip-rule", "evenodd");
  path.setAttribute("d", d);

  svg.appendChild(path);

  return svg;

}