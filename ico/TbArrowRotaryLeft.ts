import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowRotaryLeft icon from Tabler Icons
 * @module
 */
export function TbArrowRotaryLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 10a3 3 0 1 1 0 -6a3 3 0 0 1 0 6z"}},{tag:"path",attr:{d:"M16 10v10"},child:[]},{tag:"path",attr:{d:"M13 7h-10"},child:[]},{tag:"path",attr:{d:"M7 11l-4 -4l4 -4"},child:[]}]})(props);
}
export default TbArrowRotaryLeft;
