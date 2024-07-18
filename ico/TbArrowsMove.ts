import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowsMove icon from Tabler Icons
 * @module
 */
export function TbArrowsMove(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 9l3 3l-3 3"}},{tag:"path",attr:{d:"M15 12h6"},child:[]},{tag:"path",attr:{d:"M6 9l-3 3l3 3"},child:[]},{tag:"path",attr:{d:"M3 12h6"},child:[]},{tag:"path",attr:{d:"M9 18l3 3l3 -3"},child:[]},{tag:"path",attr:{d:"M12 15v6"},child:[]},{tag:"path",attr:{d:"M15 6l-3 -3l-3 3"},child:[]},{tag:"path",attr:{d:"M12 3v6"},child:[]}]})(props);
}
export default TbArrowsMove;
