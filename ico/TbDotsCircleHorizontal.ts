import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * DotsCircleHorizontal icon from Tabler Icons
 * @module
 */
export function TbDotsCircleHorizontal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}},{tag:"path",attr:{d:"M8 12l0 .01"},child:[]},{tag:"path",attr:{d:"M12 12l0 .01"},child:[]},{tag:"path",attr:{d:"M16 12l0 .01"},child:[]}]})(props);
}
export default TbDotsCircleHorizontal;
