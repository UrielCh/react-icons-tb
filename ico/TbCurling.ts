import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Curling icon from Tabler Icons
 * @module
 */
export function TbCurling(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 9m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v2a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"}},{tag:"path",attr:{d:"M4 14h16"},child:[]},{tag:"path",attr:{d:"M8 5h6a2 2 0 0 1 2 2v2"},child:[]}]})(props);
}
export default TbCurling;
