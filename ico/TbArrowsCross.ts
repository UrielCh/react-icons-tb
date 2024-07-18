import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowsCross icon from Tabler Icons
 * @module
 */
export function TbArrowsCross(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 4h4v4"}},{tag:"path",attr:{d:"M15 9l5 -5"},child:[]},{tag:"path",attr:{d:"M4 20l5 -5"},child:[]},{tag:"path",attr:{d:"M16 20h4v-4"},child:[]},{tag:"path",attr:{d:"M4 4l16 16"},child:[]}]})(props);
}
export default TbArrowsCross;
