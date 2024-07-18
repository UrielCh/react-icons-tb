import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Kerning icon from Tabler Icons
 * @module
 */
export function TbKerning(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 15v-3.5a2.5 2.5 0 1 1 5 0v3.5m0 -2h-5"}},{tag:"path",attr:{d:"M3 9l3 6l3 -6"},child:[]},{tag:"path",attr:{d:"M9 20l6 -16"},child:[]}]})(props);
}
export default TbKerning;
