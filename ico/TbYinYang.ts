import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * YinYang icon from Tabler Icons
 * @module
 */
export function TbYinYang(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}},{tag:"path",attr:{d:"M12 3a4.5 4.5 0 0 0 0 9a4.5 4.5 0 0 1 0 9"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"7.5","r":".5",fill:"currentColor"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"16.5","r":".5",fill:"currentColor"},child:[]}]})(props);
}
export default TbYinYang;
