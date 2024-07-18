import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Marquee icon from Tabler Icons
 * @module
 */
export function TbMarquee(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 6a2 2 0 0 1 2 -2m3 0h1.5m3 0h1.5m3 0a2 2 0 0 1 2 2m0 3v1.5m0 3v1.5m0 3a2 2 0 0 1 -2 2m-3 0h-1.5m-3 0h-1.5m-3 0a2 2 0 0 1 -2 -2m0 -3v-1.5m0 -3v-1.5m0 -3"}}]})(props);
}
export default TbMarquee;
