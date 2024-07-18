import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Magnetic icon from Tabler Icons
 * @module
 */
export function TbMagnetic(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 3v18"}},{tag:"path",attr:{d:"M18 7c-.633 -1.255 -1.538 -2 -2.5 -2c-1.933 0 -3.5 3.134 -3.5 7s1.567 7 3.5 7s3.5 -3.134 3.5 -7v-1"},child:[]},{tag:"path",attr:{d:"M6 7c.633 -1.255 1.538 -2 2.5 -2c1.933 0 3.5 3.134 3.5 7s-1.567 7 -3.5 7s-3.5 -3.134 -3.5 -7v-1"},child:[]},{tag:"path",attr:{d:"M3 13l2 -2l2 2"},child:[]},{tag:"path",attr:{d:"M17 13l2 -2l2 2"},child:[]}]})(props);
}
export default TbMagnetic;
