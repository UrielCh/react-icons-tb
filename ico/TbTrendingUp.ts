import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * TrendingUp icon from Tabler Icons
 * @module
 */
export function TbTrendingUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 17l6 -6l4 4l8 -8"}},{tag:"path",attr:{d:"M14 7l7 0l0 7"},child:[]}]})(props);
}
export default TbTrendingUp;
