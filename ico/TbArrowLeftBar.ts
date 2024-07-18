import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowLeftBar icon from Tabler Icons
 * @module
 */
export function TbArrowLeftBar(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12h-18"}},{tag:"path",attr:{d:"M6 9l-3 3l3 3"},child:[]},{tag:"path",attr:{d:"M21 9v6"},child:[]}]})(props);
}
export default TbArrowLeftBar;
