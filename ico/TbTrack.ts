import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Track icon from Tabler Icons
 * @module
 */
export function TbTrack(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 15l11 -11m5 5l-11 11m-4 -8l7 7m-3.5 -10.5l7 7m-3.5 -10.5l7 7"}}]})(props);
}
export default TbTrack;
