import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * RepeatOnce icon from Tabler Icons
 * @module
 */
export function TbRepeatOnce(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3"}},{tag:"path",attr:{d:"M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3"},child:[]},{tag:"path",attr:{d:"M11 11l1 -1v4"},child:[]}]})(props);
}
export default TbRepeatOnce;
