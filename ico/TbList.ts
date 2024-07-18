import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * List icon from Tabler Icons
 * @module
 */
export function TbList(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 6l11 0"}},{tag:"path",attr:{d:"M9 12l11 0"},child:[]},{tag:"path",attr:{d:"M9 18l11 0"},child:[]},{tag:"path",attr:{d:"M5 6l0 .01"},child:[]},{tag:"path",attr:{d:"M5 12l0 .01"},child:[]},{tag:"path",attr:{d:"M5 18l0 .01"},child:[]}]})(props);
}
export default TbList;
