import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * InputX icon from Tabler Icons
 * @module
 */
export function TbInputX(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 13v-4a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v5a2 2 0 0 0 2 2h7"}},{tag:"path",attr:{d:"M22 22l-5 -5"},child:[]},{tag:"path",attr:{d:"M17 22l5 -5"},child:[]}]})(props);
}
export default TbInputX;
