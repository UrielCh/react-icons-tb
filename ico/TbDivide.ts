import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Divide icon from Tabler Icons
 * @module
 */
export function TbDivide(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"6","r":"1",fill:"currentColor"}},{tag:"circle",attr:{"cx":"12","cy":"18","r":"1",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M5 12l14 0"},child:[]}]})(props);
}
export default TbDivide;
