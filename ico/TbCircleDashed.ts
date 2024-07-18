import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CircleDashed icon from Tabler Icons
 * @module
 */
export function TbCircleDashed(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8.56 3.69a9 9 0 0 0 -2.92 1.95"}},{tag:"path",attr:{d:"M3.69 8.56a9 9 0 0 0 -.69 3.44"},child:[]},{tag:"path",attr:{d:"M3.69 15.44a9 9 0 0 0 1.95 2.92"},child:[]},{tag:"path",attr:{d:"M8.56 20.31a9 9 0 0 0 3.44 .69"},child:[]},{tag:"path",attr:{d:"M15.44 20.31a9 9 0 0 0 2.92 -1.95"},child:[]},{tag:"path",attr:{d:"M20.31 15.44a9 9 0 0 0 .69 -3.44"},child:[]},{tag:"path",attr:{d:"M20.31 8.56a9 9 0 0 0 -1.95 -2.92"},child:[]},{tag:"path",attr:{d:"M15.44 3.69a9 9 0 0 0 -3.44 -.69"},child:[]}]})(props);
}
export default TbCircleDashed;
