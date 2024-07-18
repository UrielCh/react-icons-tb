import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BasketBolt icon from Tabler Icons
 * @module
 */
export function TbBasketBolt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 10l-2 -6"}},{tag:"path",attr:{d:"M7 10l2 -6"},child:[]},{tag:"path",attr:{d:"M13 20h-5.756a3 3 0 0 1 -2.965 -2.544l-1.255 -7.152a2 2 0 0 1 1.977 -2.304h13.999a2 2 0 0 1 1.977 2.304l-.358 2.04"},child:[]},{tag:"path",attr:{d:"M10 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"},child:[]},{tag:"path",attr:{d:"M19 16l-2 3h4l-2 3"},child:[]}]})(props);
}
export default TbBasketBolt;
