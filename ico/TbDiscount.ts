import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Discount icon from Tabler Icons
 * @module
 */
export function TbDiscount(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 15l6 -6"}},{tag:"circle",attr:{"cx":"9.5","cy":"9.5","r":".5",fill:"currentColor"},child:[]},{tag:"circle",attr:{"cx":"14.5","cy":"14.5","r":".5",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"},child:[]}]})(props);
}
export default TbDiscount;
