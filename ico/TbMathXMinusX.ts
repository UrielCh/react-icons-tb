import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MathXMinusX icon from Tabler Icons
 * @module
 */
export function TbMathXMinusX(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 9l6 6"}},{tag:"path",attr:{d:"M2 15l6 -6"},child:[]},{tag:"path",attr:{d:"M16 9l6 6"},child:[]},{tag:"path",attr:{d:"M16 15l6 -6"},child:[]},{tag:"path",attr:{d:"M10 12h4"},child:[]}]})(props);
}
export default TbMathXMinusX;
