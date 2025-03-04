import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowRightDashed icon from Tabler Icons
 * @module
 */
export function TbArrowRightDashed(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 12h.5m3 0h1.5m3 0h6"}},{tag:"path",attr:{d:"M13 18l6 -6"},child:[]},{tag:"path",attr:{d:"M13 6l6 6"},child:[]}]})(props);
}
export default TbArrowRightDashed;
