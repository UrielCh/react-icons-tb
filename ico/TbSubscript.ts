import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Subscript icon from Tabler Icons
 * @module
 */
export function TbSubscript(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 7l8 10m-8 0l8 -10"}},{tag:"path",attr:{d:"M21 20h-4l3.5 -4a1.73 1.73 0 0 0 -3.5 -2"},child:[]}]})(props);
}
export default TbSubscript;
