import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Bath icon from Tabler Icons
 * @module
 */
export function TbBath(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 12h16a1 1 0 0 1 1 1v3a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4v-3a1 1 0 0 1 1 -1z"}},{tag:"path",attr:{d:"M6 12v-7a2 2 0 0 1 2 -2h3v2.25"},child:[]},{tag:"path",attr:{d:"M4 21l1 -1.5"},child:[]},{tag:"path",attr:{d:"M20 21l-1 -1.5"},child:[]}]})(props);
}
export default TbBath;
