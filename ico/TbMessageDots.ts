import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MessageDots icon from Tabler Icons
 * @module
 */
export function TbMessageDots(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 11v.01"}},{tag:"path",attr:{d:"M8 11v.01"},child:[]},{tag:"path",attr:{d:"M16 11v.01"},child:[]},{tag:"path",attr:{d:"M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3z"},child:[]}]})(props);
}
export default TbMessageDots;
