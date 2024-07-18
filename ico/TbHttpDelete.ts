import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * HttpDelete icon from Tabler Icons
 * @module
 */
export function TbHttpDelete(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 8v8h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-2z"}},{tag:"path",attr:{d:"M14 8h-4v8h4"},child:[]},{tag:"path",attr:{d:"M10 12h2.5"},child:[]},{tag:"path",attr:{d:"M17 8v8h4"},child:[]}]})(props);
}
export default TbHttpDelete;
