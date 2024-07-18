import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SignLeft icon from Tabler Icons
 * @module
 */
export function TbSignLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21h-4"}},{tag:"path",attr:{d:"M14 21v-10"},child:[]},{tag:"path",attr:{d:"M14 6v-3"},child:[]},{tag:"path",attr:{d:"M18 6h-10l-2 2.5l2 2.5h10z"},child:[]}]})(props);
}
export default TbSignLeft;
