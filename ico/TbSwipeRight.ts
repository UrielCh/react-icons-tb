import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SwipeRight icon from Tabler Icons
 * @module
 */
export function TbSwipeRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 12a4 4 0 1 1 8 0a4 4 0 0 1 -8 0z"}},{tag:"path",attr:{d:"M12 12h8"},child:[]},{tag:"path",attr:{d:"M17 15l3 -3l-3 -3"},child:[]}]})(props);
}
export default TbSwipeRight;
