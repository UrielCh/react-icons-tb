import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Exposure icon from Tabler Icons
 * @module
 */
export function TbExposure(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3.6 20.4l16.8 -16.8"}},{tag:"path",attr:{d:"M6 8h4m-2 -2v4"},child:[]},{tag:"path",attr:{d:"M14 16h4"},child:[]},{tag:"path",attr:{d:"M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"},child:[]}]})(props);
}
export default TbExposure;
