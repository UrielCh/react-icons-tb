import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Submarine icon from Tabler Icons
 * @module
 */
export function TbSubmarine(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 11v6h2l1 -1.5l3 1.5h10a3 3 0 0 0 0 -6h-10h0l-3 1.5l-1 -1.5h-2z"}},{tag:"path",attr:{d:"M17 11l-1 -3h-5l-1 3"},child:[]},{tag:"path",attr:{d:"M13 8v-2a1 1 0 0 1 1 -1h1"},child:[]}]})(props);
}
export default TbSubmarine;
