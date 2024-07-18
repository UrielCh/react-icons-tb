import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Cast icon from Tabler Icons
 * @module
 */
export function TbCast(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 19l.01 0"}},{tag:"path",attr:{d:"M7 19a4 4 0 0 0 -4 -4"},child:[]},{tag:"path",attr:{d:"M11 19a8 8 0 0 0 -8 -8"},child:[]},{tag:"path",attr:{d:"M15 19h3a3 3 0 0 0 3 -3v-8a3 3 0 0 0 -3 -3h-12a3 3 0 0 0 -2.8 2"},child:[]}]})(props);
}
export default TbCast;
