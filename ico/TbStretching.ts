import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Stretching icon from Tabler Icons
 * @module
 */
export function TbStretching(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}},{tag:"path",attr:{d:"M5 20l5 -.5l1 -2"},child:[]},{tag:"path",attr:{d:"M18 20v-5h-5.5l2.5 -6.5l-5.5 1l1.5 2"},child:[]}]})(props);
}
export default TbStretching;
