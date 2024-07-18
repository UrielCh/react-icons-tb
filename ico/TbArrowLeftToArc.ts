import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowLeftToArc icon from Tabler Icons
 * @module
 */
export function TbArrowLeftToArc(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12h-12"}},{tag:"path",attr:{d:"M13 16l-4 -4l4 -4"},child:[]},{tag:"path",attr:{d:"M12 3a9 9 0 1 0 0 18"},child:[]}]})(props);
}
export default TbArrowLeftToArc;
