import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * TrendingDown icon from Tabler Icons
 * @module
 */
export function TbTrendingDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 7l6 6l4 -4l8 8"}},{tag:"path",attr:{d:"M21 10l0 7l-7 0"},child:[]}]})(props);
}
export default TbTrendingDown;
