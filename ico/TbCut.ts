import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Cut icon from Tabler Icons
 * @module
 */
export function TbCut(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}},{tag:"path",attr:{d:"M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"},child:[]},{tag:"path",attr:{d:"M9.15 14.85l8.85 -10.85"},child:[]},{tag:"path",attr:{d:"M6 4l8.85 10.85"},child:[]}]})(props);
}
export default TbCut;
