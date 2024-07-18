import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MathXMinusY icon from Tabler Icons
 * @module
 */
export function TbMathXMinusY(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 9l6 6"}},{tag:"path",attr:{d:"M2 15l6 -6"},child:[]},{tag:"path",attr:{d:"M16 9l3 5.063"},child:[]},{tag:"path",attr:{d:"M22 9l-4.8 9"},child:[]},{tag:"path",attr:{d:"M10 12h4"},child:[]}]})(props);
}
export default TbMathXMinusY;
