import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MenuDeep icon from Tabler Icons
 * @module
 */
export function TbMenuDeep(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 6h16"}},{tag:"path",attr:{d:"M7 12h13"},child:[]},{tag:"path",attr:{d:"M10 18h10"},child:[]}]})(props);
}
export default TbMenuDeep;
