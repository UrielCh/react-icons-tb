import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowUpDashed icon from Tabler Icons
 * @module
 */
export function TbArrowUpDashed(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 5v6m0 3v1.5m0 3v.5"}},{tag:"path",attr:{d:"M18 11l-6 -6"},child:[]},{tag:"path",attr:{d:"M6 11l6 -6"},child:[]}]})(props);
}
export default TbArrowUpDashed;
