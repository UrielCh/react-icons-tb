import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Math icon from Tabler Icons
 * @module
 */
export function TbMath(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 5h-7l-4 14l-3 -6h-2"}},{tag:"path",attr:{d:"M14 13l6 6"},child:[]},{tag:"path",attr:{d:"M14 19l6 -6"},child:[]}]})(props);
}
export default TbMath;
