import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * HomeBolt icon from Tabler Icons
 * @module
 */
export function TbHomeBolt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 10l-7 -7l-9 9h2v7a2 2 0 0 0 2 2h7.5"}},{tag:"path",attr:{d:"M9 21v-6a2 2 0 0 1 2 -2h2c.661 0 1.248 .32 1.612 .815"},child:[]},{tag:"path",attr:{d:"M19 14l-2 4h4l-2 4"},child:[]}]})(props);
}
export default TbHomeBolt;
