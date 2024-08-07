import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Fish icon from Tabler Icons
 * @module
 */
export function TbFish(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16.69 7.44a6.973 6.973 0 0 0 -1.69 4.56c0 1.747 .64 3.345 1.699 4.571"}},{tag:"path",attr:{d:"M2 9.504c7.715 8.647 14.75 10.265 20 2.498c-5.25 -7.761 -12.285 -6.142 -20 2.504"},child:[]},{tag:"path",attr:{d:"M18 11v.01"},child:[]},{tag:"path",attr:{d:"M11.5 10.5c-.667 1 -.667 2 0 3"},child:[]}]})(props);
}
export default TbFish;
