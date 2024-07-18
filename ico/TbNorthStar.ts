import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * NorthStar icon from Tabler Icons
 * @module
 */
export function TbNorthStar(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 12h18"}},{tag:"path",attr:{d:"M12 21v-18"},child:[]},{tag:"path",attr:{d:"M7.5 7.5l9 9"},child:[]},{tag:"path",attr:{d:"M7.5 16.5l9 -9"},child:[]}]})(props);
}
export default TbNorthStar;
