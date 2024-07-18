import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SignalHPlus icon from Tabler Icons
 * @module
 */
export function TbSignalHPlus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 16v-8"}},{tag:"path",attr:{d:"M11 8v8"},child:[]},{tag:"path",attr:{d:"M7 12h4"},child:[]},{tag:"path",attr:{d:"M14 12h4"},child:[]},{tag:"path",attr:{d:"M16 10v4"},child:[]}]})(props);
}
export default TbSignalHPlus;
