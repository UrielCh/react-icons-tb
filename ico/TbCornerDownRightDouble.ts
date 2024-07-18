import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CornerDownRightDouble icon from Tabler Icons
 * @module
 */
export function TbCornerDownRightDouble(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 5v6a3 3 0 0 0 3 3h7"}},{tag:"path",attr:{d:"M10 10l4 4l-4 4m5 -8l4 4l-4 4"},child:[]}]})(props);
}
export default TbCornerDownRightDouble;
