import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MathXy icon from Tabler Icons
 * @module
 */
export function TbMathXy(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 9l3 5.063"}},{tag:"path",attr:{d:"M4 9l6 6"},child:[]},{tag:"path",attr:{d:"M4 15l6 -6"},child:[]},{tag:"path",attr:{d:"M20 9l-4.8 9"},child:[]}]})(props);
}
export default TbMathXy;
