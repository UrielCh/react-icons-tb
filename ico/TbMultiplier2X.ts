import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Multiplier2X icon from Tabler Icons
 * @module
 */
export function TbMultiplier2X(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 16l4 -4"}},{tag:"path",attr:{d:"M18 16l-4 -4"},child:[]},{tag:"path",attr:{d:"M6 10a2 2 0 1 1 4 0c0 .591 -.417 1.318 -.816 1.858l-3.184 4.143l4 0"},child:[]}]})(props);
}
export default TbMultiplier2X;
