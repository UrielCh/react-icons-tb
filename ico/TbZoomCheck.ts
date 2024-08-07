import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ZoomCheck icon from Tabler Icons
 * @module
 */
export function TbZoomCheck(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"}},{tag:"path",attr:{d:"M21 21l-6 -6"},child:[]},{tag:"path",attr:{d:"M7 10l2 2l4 -4"},child:[]}]})(props);
}
export default TbZoomCheck;
