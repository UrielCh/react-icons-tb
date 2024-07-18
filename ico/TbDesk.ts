import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Desk icon from Tabler Icons
 * @module
 */
export function TbDesk(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 6h18"}},{tag:"path",attr:{d:"M4 6v13"},child:[]},{tag:"path",attr:{d:"M20 19v-13"},child:[]},{tag:"path",attr:{d:"M4 10h16"},child:[]},{tag:"path",attr:{d:"M15 6v8a2 2 0 0 0 2 2h3"},child:[]}]})(props);
}
export default TbDesk;
