import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Wall icon from Tabler Icons
 * @module
 */
export function TbWall(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"}},{tag:"path",attr:{d:"M4 8h16"},child:[]},{tag:"path",attr:{d:"M20 12h-16"},child:[]},{tag:"path",attr:{d:"M4 16h16"},child:[]},{tag:"path",attr:{d:"M9 4v4"},child:[]},{tag:"path",attr:{d:"M14 8v4"},child:[]},{tag:"path",attr:{d:"M8 12v4"},child:[]},{tag:"path",attr:{d:"M16 12v4"},child:[]},{tag:"path",attr:{d:"M11 16v4"},child:[]}]})(props);
}
export default TbWall;
