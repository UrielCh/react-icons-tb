import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Number icon from Tabler Icons
 * @module
 */
export function TbNumber(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 17v-10l7 10v-10"}},{tag:"path",attr:{d:"M15 17h5"},child:[]},{tag:"path",attr:{d:"M17.5 10m-2.5 0a2.5 3 0 1 0 5 0a2.5 3 0 1 0 -5 0"},child:[]}]})(props);
}
export default TbNumber;
