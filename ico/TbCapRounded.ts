import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CapRounded icon from Tabler Icons
 * @module
 */
export function TbCapRounded(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 6h-9a6 6 0 1 0 0 12h9"}},{tag:"path",attr:{d:"M13 12a2 2 0 1 1 -4 0a2 2 0 0 1 4 0"},child:[]},{tag:"path",attr:{d:"M13 12h7"},child:[]}]})(props);
}
export default TbCapRounded;
