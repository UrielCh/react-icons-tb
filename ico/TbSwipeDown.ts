import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SwipeDown icon from Tabler Icons
 * @module
 */
export function TbSwipeDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 4a4 4 0 1 1 0 8a4 4 0 0 1 0 -8z"}},{tag:"path",attr:{d:"M12 12v8"},child:[]},{tag:"path",attr:{d:"M9 17l3 3l3 -3"},child:[]}]})(props);
}
export default TbSwipeDown;
