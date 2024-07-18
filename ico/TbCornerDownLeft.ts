import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CornerDownLeft icon from Tabler Icons
 * @module
 */
export function TbCornerDownLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 6v6a3 3 0 0 1 -3 3h-10l4 -4m0 8l-4 -4"}}]})(props);
}
export default TbCornerDownLeft;
