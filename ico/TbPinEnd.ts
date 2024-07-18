import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * PinEnd icon from Tabler Icons
 * @module
 */
export function TbPinEnd(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 11v-5a1 1 0 0 0 -1 -1h-16a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h9"}},{tag:"path",attr:{d:"M19 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"},child:[]},{tag:"path",attr:{d:"M10 13v-4h4"},child:[]},{tag:"path",attr:{d:"M14 13l-4 -4"},child:[]}]})(props);
}
export default TbPinEnd;
