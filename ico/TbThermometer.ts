import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Thermometer icon from Tabler Icons
 * @module
 */
export function TbThermometer(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 5a2.828 2.828 0 0 1 0 4l-8 8h-4v-4l8 -8a2.828 2.828 0 0 1 4 0z"}},{tag:"path",attr:{d:"M16 7l-1.5 -1.5"},child:[]},{tag:"path",attr:{d:"M13 10l-1.5 -1.5"},child:[]},{tag:"path",attr:{d:"M10 13l-1.5 -1.5"},child:[]},{tag:"path",attr:{d:"M7 17l-3 3"},child:[]}]})(props);
}
export default TbThermometer;
