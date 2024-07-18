import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * TemperatureFahrenheit icon from Tabler Icons
 * @module
 */
export function TbTemperatureFahrenheit(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 8m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}},{tag:"path",attr:{d:"M13 12l5 0"},child:[]},{tag:"path",attr:{d:"M20 6h-6a1 1 0 0 0 -1 1v11"},child:[]}]})(props);
}
export default TbTemperatureFahrenheit;
