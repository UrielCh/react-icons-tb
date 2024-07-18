import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowsDiff icon from Tabler Icons
 * @module
 */
export function TbArrowsDiff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 16h10"}},{tag:"path",attr:{d:"M11 16l4 4"},child:[]},{tag:"path",attr:{d:"M11 16l4 -4"},child:[]},{tag:"path",attr:{d:"M13 8h-10"},child:[]},{tag:"path",attr:{d:"M13 8l-4 4"},child:[]},{tag:"path",attr:{d:"M13 8l-4 -4"},child:[]}]})(props);
}
export default TbArrowsDiff;
