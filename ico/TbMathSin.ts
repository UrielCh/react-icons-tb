import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MathSin icon from Tabler Icons
 * @module
 */
export function TbMathSin(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 15c.345 .6 1.258 1 2 1a2 2 0 1 0 0 -4a2 2 0 1 1 0 -4c.746 0 1.656 .394 2 1"}},{tag:"path",attr:{d:"M12 8v8"},child:[]},{tag:"path",attr:{d:"M16 16v-8l4 8v-8"},child:[]}]})(props);
}
export default TbMathSin;
