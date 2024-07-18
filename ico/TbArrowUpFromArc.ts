import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowUpFromArc icon from Tabler Icons
 * @module
 */
export function TbArrowUpFromArc(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 9v12"}},{tag:"path",attr:{d:"M8 17l4 4l4 -4"},child:[]},{tag:"path",attr:{d:"M21 12a9 9 0 0 0 -18 0"},child:[]}]})(props);
}
export default TbArrowUpFromArc;
