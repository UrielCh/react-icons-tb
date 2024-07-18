import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * RadiusBottomLeft icon from Tabler Icons
 * @module
 */
export function TbRadiusBottomLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 19h-6a8 8 0 0 1 -8 -8v-6"}}]})(props);
}
export default TbRadiusBottomLeft;
