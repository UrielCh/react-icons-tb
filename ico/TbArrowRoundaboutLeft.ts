import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowRoundaboutLeft icon from Tabler Icons
 * @module
 */
export function TbArrowRoundaboutLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 9h8a5 5 0 1 1 5 5v7"}},{tag:"path",attr:{d:"M7 5l-4 4l4 4"},child:[]}]})(props);
}
export default TbArrowRoundaboutLeft;
