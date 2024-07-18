import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ChartArrows icon from Tabler Icons
 * @module
 */
export function TbChartArrows(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 18l14 0"}},{tag:"path",attr:{d:"M9 9l3 3l-3 3"},child:[]},{tag:"path",attr:{d:"M14 15l3 3l-3 3"},child:[]},{tag:"path",attr:{d:"M3 3l0 18"},child:[]},{tag:"path",attr:{d:"M3 12l9 0"},child:[]},{tag:"path",attr:{d:"M18 3l3 3l-3 3"},child:[]},{tag:"path",attr:{d:"M3 6l18 0"},child:[]}]})(props);
}
export default TbChartArrows;
