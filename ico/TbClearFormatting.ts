import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ClearFormatting icon from Tabler Icons
 * @module
 */
export function TbClearFormatting(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 15l4 4m0 -4l-4 4"}},{tag:"path",attr:{d:"M7 6v-1h11v1"},child:[]},{tag:"path",attr:{d:"M7 19l4 0"},child:[]},{tag:"path",attr:{d:"M13 5l-4 14"},child:[]}]})(props);
}
export default TbClearFormatting;
