import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MessagePause icon from Tabler Icons
 * @module
 */
export function TbMessagePause(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 9h8"}},{tag:"path",attr:{d:"M8 13h6"},child:[]},{tag:"path",attr:{d:"M13 18l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6"},child:[]},{tag:"path",attr:{d:"M17 17v5"},child:[]},{tag:"path",attr:{d:"M21 17v5"},child:[]}]})(props);
}
export default TbMessagePause;
