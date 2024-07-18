import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowBarBoth icon from Tabler Icons
 * @module
 */
export function TbArrowBarBoth(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 12h-6"}},{tag:"path",attr:{d:"M5 15l-3 -3l3 -3"},child:[]},{tag:"path",attr:{d:"M22 12h-6"},child:[]},{tag:"path",attr:{d:"M19 15l3 -3l-3 -3"},child:[]},{tag:"path",attr:{d:"M12 4v16"},child:[]}]})(props);
}
export default TbArrowBarBoth;
