import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Switch icon from Tabler Icons
 * @module
 */
export function TbSwitch(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 4l4 0l0 4"}},{tag:"path",attr:{d:"M14.75 9.25l4.25 -5.25"},child:[]},{tag:"path",attr:{d:"M5 19l4 -4"},child:[]},{tag:"path",attr:{d:"M15 19l4 0l0 -4"},child:[]},{tag:"path",attr:{d:"M5 5l14 14"},child:[]}]})(props);
}
export default TbSwitch;
