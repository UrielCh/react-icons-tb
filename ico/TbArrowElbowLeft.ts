import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowElbowLeft icon from Tabler Icons
 * @module
 */
export function TbArrowElbowLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 14v-6h6"}},{tag:"path",attr:{d:"M3 8l9 9l9 -9"},child:[]}]})(props);
}
export default TbArrowElbowLeft;
