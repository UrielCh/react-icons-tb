import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Mist icon from Tabler Icons
 * @module
 */
export function TbMist(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 5h3m4 0h9"}},{tag:"path",attr:{d:"M3 10h11m4 0h1"},child:[]},{tag:"path",attr:{d:"M5 15h5m4 0h7"},child:[]},{tag:"path",attr:{d:"M3 20h9m4 0h3"},child:[]}]})(props);
}
export default TbMist;
