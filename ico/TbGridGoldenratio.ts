import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * GridGoldenratio icon from Tabler Icons
 * @module
 */
export function TbGridGoldenratio(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 10h18"}},{tag:"path",attr:{d:"M3 14h18"},child:[]},{tag:"path",attr:{d:"M10 3v18"},child:[]},{tag:"path",attr:{d:"M14 3v18"},child:[]}]})(props);
}
export default TbGridGoldenratio;
