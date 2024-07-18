import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowElbowRight icon from Tabler Icons
 * @module
 */
export function TbArrowElbowRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 14v-6h-6"}},{tag:"path",attr:{d:"M21 8l-9 9l-9 -9"},child:[]}]})(props);
}
export default TbArrowElbowRight;
