import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CodeOff icon from Tabler Icons
 * @module
 */
export function TbCodeOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 8l-4 4l4 4"}},{tag:"path",attr:{d:"M17 8l4 4l-2.5 2.5"},child:[]},{tag:"path",attr:{d:"M14 4l-1.201 4.805m-.802 3.207l-2 7.988"},child:[]},{tag:"path",attr:{d:"M3 3l18 18"},child:[]}]})(props);
}
export default TbCodeOff;
