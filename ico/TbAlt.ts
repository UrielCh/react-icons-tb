import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Alt icon from Tabler Icons
 * @module
 */
export function TbAlt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 16v-6a2 2 0 1 1 4 0v6"}},{tag:"path",attr:{d:"M4 13h4"},child:[]},{tag:"path",attr:{d:"M11 8v8h4"},child:[]},{tag:"path",attr:{d:"M16 8h4"},child:[]},{tag:"path",attr:{d:"M18 8v8"},child:[]}]})(props);
}
export default TbAlt;
