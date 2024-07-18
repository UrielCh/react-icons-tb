import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * UxCircle icon from Tabler Icons
 * @module
 */
export function TbUxCircle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}},{tag:"path",attr:{d:"M7 10v2a2 2 0 1 0 4 0v-2"},child:[]},{tag:"path",attr:{d:"M14 10l3 4"},child:[]},{tag:"path",attr:{d:"M14 14l3 -4"},child:[]}]})(props);
}
export default TbUxCircle;
