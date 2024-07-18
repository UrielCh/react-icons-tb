import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * RadiusTopLeft icon from Tabler Icons
 * @module
 */
export function TbRadiusTopLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 19v-6a8 8 0 0 1 8 -8h6"}}]})(props);
}
export default TbRadiusTopLeft;
