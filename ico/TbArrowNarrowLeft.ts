import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowNarrowLeft icon from Tabler Icons
 * @module
 */
export function TbArrowNarrowLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 12l14 0"}},{tag:"path",attr:{d:"M5 12l4 4"},child:[]},{tag:"path",attr:{d:"M5 12l4 -4"},child:[]}]})(props);
}
export default TbArrowNarrowLeft;
