import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ClearAll icon from Tabler Icons
 * @module
 */
export function TbClearAll(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 6h12"}},{tag:"path",attr:{d:"M6 12h12"},child:[]},{tag:"path",attr:{d:"M4 18h12"},child:[]}]})(props);
}
export default TbClearAll;
