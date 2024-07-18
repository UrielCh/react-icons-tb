import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Comet icon from Tabler Icons
 * @module
 */
export function TbComet(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15.5 18.5l-3 1.5l.5 -3.5l-2 -2l3 -.5l1.5 -3l1.5 3l3 .5l-2 2l.5 3.5z"}},{tag:"path",attr:{d:"M4 4l7 7"},child:[]},{tag:"path",attr:{d:"M9 4l3.5 3.5"},child:[]},{tag:"path",attr:{d:"M4 9l3.5 3.5"},child:[]}]})(props);
}
export default TbComet;
