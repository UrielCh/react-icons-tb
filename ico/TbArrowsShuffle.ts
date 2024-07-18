import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowsShuffle icon from Tabler Icons
 * @module
 */
export function TbArrowsShuffle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 4l3 3l-3 3"}},{tag:"path",attr:{d:"M18 20l3 -3l-3 -3"},child:[]},{tag:"path",attr:{d:"M3 7h3a5 5 0 0 1 5 5a5 5 0 0 0 5 5h5"},child:[]},{tag:"path",attr:{d:"M21 7h-5a4.978 4.978 0 0 0 -3 1m-4 8a4.984 4.984 0 0 1 -3 1h-3"},child:[]}]})(props);
}
export default TbArrowsShuffle;
