import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Multiplier1X icon from Tabler Icons
 * @module
 */
export function TbMultiplier1X(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 16v-8l-2 2"}},{tag:"path",attr:{d:"M13 16l4 -4"},child:[]},{tag:"path",attr:{d:"M17 16l-4 -4"},child:[]}]})(props);
}
export default TbMultiplier1X;
