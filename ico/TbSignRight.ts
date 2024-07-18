import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SignRight icon from Tabler Icons
 * @module
 */
export function TbSignRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 21h4"}},{tag:"path",attr:{d:"M10 21v-10"},child:[]},{tag:"path",attr:{d:"M10 6v-3"},child:[]},{tag:"path",attr:{d:"M6 6h10l2 2.5l-2 2.5h-10z"},child:[]}]})(props);
}
export default TbSignRight;
