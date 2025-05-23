import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowNarrowLeftDashed icon from Tabler Icons
 * @module
 */
export function TbArrowNarrowLeftDashed(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 12h6m3 0h1.5m3 0h.5"}},{tag:"path",attr:{d:"M5 12l4 4"},child:[]},{tag:"path",attr:{d:"M5 12l4 -4"},child:[]}]})(props);
}
export default TbArrowNarrowLeftDashed;
