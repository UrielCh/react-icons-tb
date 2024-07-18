import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Transform icon from Tabler Icons
 * @module
 */
export function TbTransform(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 6a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"}},{tag:"path",attr:{d:"M21 11v-3a2 2 0 0 0 -2 -2h-6l3 3m0 -6l-3 3"},child:[]},{tag:"path",attr:{d:"M3 13v3a2 2 0 0 0 2 2h6l-3 -3m0 6l3 -3"},child:[]},{tag:"path",attr:{d:"M15 18a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"},child:[]}]})(props);
}
export default TbTransform;
