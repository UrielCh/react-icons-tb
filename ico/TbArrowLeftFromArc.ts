import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowLeftFromArc icon from Tabler Icons
 * @module
 */
export function TbArrowLeftFromArc(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 12h12"}},{tag:"path",attr:{d:"M17 16l4 -4l-4 -4"},child:[]},{tag:"path",attr:{d:"M12 3a9 9 0 1 0 0 18"},child:[]}]})(props);
}
export default TbArrowLeftFromArc;
