import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Spider icon from Tabler Icons
 * @module
 */
export function TbSpider(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 4v2l5 5"}},{tag:"path",attr:{d:"M2.5 9.5l1.5 1.5h6"},child:[]},{tag:"path",attr:{d:"M4 19v-2l6 -6"},child:[]},{tag:"path",attr:{d:"M19 4v2l-5 5"},child:[]},{tag:"path",attr:{d:"M21.5 9.5l-1.5 1.5h-6"},child:[]},{tag:"path",attr:{d:"M20 19v-2l-6 -6"},child:[]},{tag:"path",attr:{d:"M12 15m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"},child:[]},{tag:"path",attr:{d:"M12 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"},child:[]}]})(props);
}
export default TbSpider;
