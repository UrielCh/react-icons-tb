import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CircleLetterX icon from Tabler Icons
 * @module
 */
export function TbCircleLetterX(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}},{tag:"path",attr:{d:"M10 8l4 8"},child:[]},{tag:"path",attr:{d:"M10 16l4 -8"},child:[]}]})(props);
}
export default TbCircleLetterX;
