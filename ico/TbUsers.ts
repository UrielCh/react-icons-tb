import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Users icon from Tabler Icons
 * @module
 */
export function TbUsers(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"}},{tag:"path",attr:{d:"M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"},child:[]},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"},child:[]},{tag:"path",attr:{d:"M21 21v-2a4 4 0 0 0 -3 -3.85"},child:[]}]})(props);
}
export default TbUsers;
