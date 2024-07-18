import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Coffin icon from Tabler Icons
 * @module
 */
export function TbCoffin(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 3l-2 6l2 12h6l2 -12l-2 -6z"}},{tag:"path",attr:{d:"M10 7v5"},child:[]},{tag:"path",attr:{d:"M8 9h4"},child:[]},{tag:"path",attr:{d:"M13 21h4l2 -12l-2 -6h-4"},child:[]}]})(props);
}
export default TbCoffin;
