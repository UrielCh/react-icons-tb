import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Brush icon from Tabler Icons
 * @module
 */
export function TbBrush(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 21v-4a4 4 0 1 1 4 4h-4"}},{tag:"path",attr:{d:"M21 3a16 16 0 0 0 -12.8 10.2"},child:[]},{tag:"path",attr:{d:"M21 3a16 16 0 0 1 -10.2 12.8"},child:[]},{tag:"path",attr:{d:"M10.6 9a9 9 0 0 1 4.4 4.4"},child:[]}]})(props);
}
export default TbBrush;
