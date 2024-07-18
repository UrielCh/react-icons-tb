import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ListTree icon from Tabler Icons
 * @module
 */
export function TbListTree(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 6h11"}},{tag:"path",attr:{d:"M12 12h8"},child:[]},{tag:"path",attr:{d:"M15 18h5"},child:[]},{tag:"path",attr:{d:"M5 6v.01"},child:[]},{tag:"path",attr:{d:"M8 12v.01"},child:[]},{tag:"path",attr:{d:"M11 18v.01"},child:[]}]})(props);
}
export default TbListTree;
