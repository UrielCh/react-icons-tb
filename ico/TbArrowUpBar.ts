import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowUpBar icon from Tabler Icons
 * @module
 */
export function TbArrowUpBar(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 21l0 -18"}},{tag:"path",attr:{d:"M15 6l-3 -3l-3 3"},child:[]},{tag:"path",attr:{d:"M9 21l6 0"},child:[]}]})(props);
}
export default TbArrowUpBar;
