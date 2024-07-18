import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * TemperatureOff icon from Tabler Icons
 * @module
 */
export function TbTemperatureOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 10v3.5a4 4 0 1 0 5.836 2.33m-1.836 -5.83v-5a2 2 0 1 0 -4 0v1"}},{tag:"path",attr:{d:"M13 9h1"},child:[]},{tag:"path",attr:{d:"M3 3l18 18"},child:[]}]})(props);
}
export default TbTemperatureOff;
