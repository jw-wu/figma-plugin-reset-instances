/* Modules */         import * as padding from "./modules/components/padding";
                      import * as spacing from "./modules/components/spacing";
                      import * as dimension from "./modules/components/dimension";
                      import * as radius from "./modules/components/radius";
                      import * as visibilty from "./modules/components/visibility";
                      import * as colors from "./modules/components/color";
                      import * as mode from "./modules/components/mode";
                      import * as typography from "./modules/components/typography";
                      import * as everything from "./modules/everything";
                      import * as outermost from "./modules/outermost";
                      import * as custom from "./modules/custom";


export const library = [

  // Add modules here.
  padding.all,
  spacing.all,
  dimension.all,
  radius.all,
  visibilty.toggle, mode.all,
  typography.all,
  colors.fills, colors.strokes,

  everything.module,
  outermost.module,
  custom.module

];