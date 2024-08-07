import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Dimensions icon from Tabler Icons
 * @module
 */
export function TbDimensions(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 5h11"}},{tag:"path",attr:{d:"M12 7l2 -2l-2 -2"},child:[]},{tag:"path",attr:{d:"M5 3l-2 2l2 2"},child:[]},{tag:"path",attr:{d:"M19 10v11"},child:[]},{tag:"path",attr:{d:"M17 19l2 2l2 -2"},child:[]},{tag:"path",attr:{d:"M21 12l-2 -2l-2 2"},child:[]},{tag:"path",attr:{d:"M3 10m0 2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2z"},child:[]}]})(props);
}
export default TbDimensions;
