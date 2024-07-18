import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ChartLine icon from Tabler Icons
 * @module
 */
export function TbChartLine(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 19l16 0"}},{tag:"path",attr:{d:"M4 15l4 -6l4 2l4 -5l4 4"},child:[]}]})(props);
}
export default TbChartLine;
