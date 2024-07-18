import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Lollipop icon from Tabler Icons
 * @module
 */
export function TbLollipop(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"}},{tag:"path",attr:{d:"M21 10a3.5 3.5 0 0 0 -7 0"},child:[]},{tag:"path",attr:{d:"M14 10a3.5 3.5 0 0 1 -7 0"},child:[]},{tag:"path",attr:{d:"M14 17a3.5 3.5 0 0 0 0 -7"},child:[]},{tag:"path",attr:{d:"M14 3a3.5 3.5 0 0 0 0 7"},child:[]},{tag:"path",attr:{d:"M3 21l6 -6"},child:[]}]})(props);
}
export default TbLollipop;
