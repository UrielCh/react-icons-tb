import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Protocol icon from Tabler Icons
 * @module
 */
export function TbProtocol(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 6l-7 12"}},{tag:"path",attr:{d:"M20 6l-7 12"},child:[]},{tag:"path",attr:{d:"M5 14v.015"},child:[]},{tag:"path",attr:{d:"M5 10.015v.015"},child:[]}]})(props);
}
export default TbProtocol;
