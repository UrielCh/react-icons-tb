import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowBarRight icon from Tabler Icons
 * @module
 */
export function TbArrowBarRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 12l-10 0"}},{tag:"path",attr:{d:"M20 12l-4 4"},child:[]},{tag:"path",attr:{d:"M20 12l-4 -4"},child:[]},{tag:"path",attr:{d:"M4 4l0 16"},child:[]}]})(props);
}
export default TbArrowBarRight;
