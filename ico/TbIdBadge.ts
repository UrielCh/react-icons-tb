import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * IdBadge icon from Tabler Icons
 * @module
 */
export function TbIdBadge(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 3m0 3a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-8a3 3 0 0 1 -3 -3z"}},{tag:"path",attr:{d:"M12 13m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"},child:[]},{tag:"path",attr:{d:"M10 6h4"},child:[]},{tag:"path",attr:{d:"M9 18h6"},child:[]}]})(props);
}
export default TbIdBadge;
