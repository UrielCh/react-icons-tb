import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * LinkOff icon from Tabler Icons
 * @module
 */
export function TbLinkOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 15l3 -3m2 -2l1 -1"}},{tag:"path",attr:{d:"M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464"},child:[]},{tag:"path",attr:{d:"M3 3l18 18"},child:[]},{tag:"path",attr:{d:"M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463"},child:[]}]})(props);
}
export default TbLinkOff;
