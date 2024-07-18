import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CircleArrowLeft icon from Tabler Icons
 * @module
 */
export function TbCircleArrowLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 21a9 9 0 1 0 0 -18a9 9 0 0 0 0 18"}},{tag:"path",attr:{d:"M8 12l4 4"},child:[]},{tag:"path",attr:{d:"M8 12h8"},child:[]},{tag:"path",attr:{d:"M12 8l-4 4"},child:[]}]})(props);
}
export default TbCircleArrowLeft;
