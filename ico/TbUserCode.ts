import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * UserCode icon from Tabler Icons
 * @module
 */
export function TbUserCode(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"}},{tag:"path",attr:{d:"M6 21v-2a4 4 0 0 1 4 -4h3.5"},child:[]},{tag:"path",attr:{d:"M20 21l2 -2l-2 -2"},child:[]},{tag:"path",attr:{d:"M17 17l-2 2l2 2"},child:[]}]})(props);
}
export default TbUserCode;
