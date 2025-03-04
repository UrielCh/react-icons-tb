import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ChartCohort icon from Tabler Icons
 * @module
 */
export function TbChartCohort(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 9h18v-6h-18v18h6v-18"}},{tag:"path",attr:{d:"M3 15h12v-12"},child:[]}]})(props);
}
export default TbChartCohort;
