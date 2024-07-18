import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Fence icon from Tabler Icons
 * @module
 */
export function TbFence(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 12v4h16v-4z"}},{tag:"path",attr:{d:"M6 16v4h4v-4m0 -4v-6l-2 -2l-2 2v6"},child:[]},{tag:"path",attr:{d:"M14 16v4h4v-4m0 -4v-6l-2 -2l-2 2v6"},child:[]}]})(props);
}
export default TbFence;
