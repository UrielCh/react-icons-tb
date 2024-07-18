import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowBarLeft icon from Tabler Icons
 * @module
 */
export function TbArrowBarLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 12l10 0"}},{tag:"path",attr:{d:"M4 12l4 4"},child:[]},{tag:"path",attr:{d:"M4 12l4 -4"},child:[]},{tag:"path",attr:{d:"M20 4l0 16"},child:[]}]})(props);
}
export default TbArrowBarLeft;
