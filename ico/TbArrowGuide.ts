import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowGuide icon from Tabler Icons
 * @module
 */
export function TbArrowGuide(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}},{tag:"path",attr:{d:"M7 19h3a2 2 0 0 0 2 -2v-8a2 2 0 0 1 2 -2h7"},child:[]},{tag:"path",attr:{d:"M18 4l3 3l-3 3"},child:[]}]})(props);
}
export default TbArrowGuide;
