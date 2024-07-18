import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowsLeftDown icon from Tabler Icons
 * @module
 */
export function TbArrowsLeftDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 3l-4 4l4 4"}},{tag:"path",attr:{d:"M3 7h11a3 3 0 0 1 3 3v11"},child:[]},{tag:"path",attr:{d:"M13 17l4 4l4 -4"},child:[]}]})(props);
}
export default TbArrowsLeftDown;
