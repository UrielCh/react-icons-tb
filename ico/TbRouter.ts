import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Router icon from Tabler Icons
 * @module
 */
export function TbRouter(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 13m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"}},{tag:"path",attr:{d:"M17 17l0 .01"},child:[]},{tag:"path",attr:{d:"M13 17l0 .01"},child:[]},{tag:"path",attr:{d:"M15 13l0 -2"},child:[]},{tag:"path",attr:{d:"M11.75 8.75a4 4 0 0 1 6.5 0"},child:[]},{tag:"path",attr:{d:"M8.5 6.5a8 8 0 0 1 13 0"},child:[]}]})(props);
}
export default TbRouter;
