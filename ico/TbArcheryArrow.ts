import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArcheryArrow icon from Tabler Icons
 * @module
 */
export function TbArcheryArrow(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 7v3h3l3 -3h-3v-3z"}},{tag:"path",attr:{d:"M14 10l-9 9"},child:[]},{tag:"path",attr:{d:"M5 15v4h4"},child:[]}]})(props);
}
export default TbArcheryArrow;
