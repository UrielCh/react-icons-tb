import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * AdCircle icon from Tabler Icons
 * @module
 */
export function TbAdCircle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 12m-10 0a10 10 0 1 0 20 0a10 10 0 1 0 -20 0"}},{tag:"path",attr:{d:"M7 15v-4.5a1.5 1.5 0 0 1 3 0v4.5"},child:[]},{tag:"path",attr:{d:"M7 13h3"},child:[]},{tag:"path",attr:{d:"M14 9v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1z"},child:[]}]})(props);
}
export default TbAdCircle;
