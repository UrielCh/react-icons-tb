import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Tank icon from Tabler Icons
 * @module
 */
export function TbTank(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 12m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v0a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z"}},{tag:"path",attr:{d:"M6 12l1 -5h5l3 5"},child:[]},{tag:"path",attr:{d:"M21 9l-7.8 0"},child:[]}]})(props);
}
export default TbTank;
