import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowRoundaboutRight icon from Tabler Icons
 * @module
 */
export function TbArrowRoundaboutRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 9h-8a5 5 0 1 0 -5 5v7"}},{tag:"path",attr:{d:"M17 5l4 4l-4 4"},child:[]}]})(props);
}
export default TbArrowRoundaboutRight;
