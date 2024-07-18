import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Abc icon from Tabler Icons
 * @module
 */
export function TbAbc(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 16v-6a2 2 0 1 1 4 0v6"}},{tag:"path",attr:{d:"M3 13h4"},child:[]},{tag:"path",attr:{d:"M10 8v6a2 2 0 1 0 4 0v-1a2 2 0 1 0 -4 0v1"},child:[]},{tag:"path",attr:{d:"M20.732 12a2 2 0 0 0 -3.732 1v1a2 2 0 0 0 3.726 1.01"},child:[]}]})(props);
}
export default TbAbc;
