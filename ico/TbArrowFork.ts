import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowFork icon from Tabler Icons
 * @module
 */
export function TbArrowFork(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 3h5v5"}},{tag:"path",attr:{d:"M8 3h-5v5"},child:[]},{tag:"path",attr:{d:"M21 3l-7.536 7.536a5 5 0 0 0 -1.464 3.534v6.93"},child:[]},{tag:"path",attr:{d:"M3 3l7.536 7.536a5 5 0 0 1 1.464 3.534v.93"},child:[]}]})(props);
}
export default TbArrowFork;
