import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Temperature icon from Tabler Icons
 * @module
 */
export function TbTemperature(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5"}},{tag:"path",attr:{d:"M10 9l4 0"},child:[]}]})(props);
}
export default TbTemperature;
