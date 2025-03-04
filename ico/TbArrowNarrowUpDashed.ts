import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowNarrowUpDashed icon from Tabler Icons
 * @module
 */
export function TbArrowNarrowUpDashed(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 5v6m0 3v1.5m0 3v.5"}},{tag:"path",attr:{d:"M16 9l-4 -4"},child:[]},{tag:"path",attr:{d:"M8 9l4 -4"},child:[]}]})(props);
}
export default TbArrowNarrowUpDashed;
