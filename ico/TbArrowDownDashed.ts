import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowDownDashed icon from Tabler Icons
 * @module
 */
export function TbArrowDownDashed(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 5v.5m0 3v1.5m0 3v6"}},{tag:"path",attr:{d:"M18 13l-6 6"},child:[]},{tag:"path",attr:{d:"M6 13l6 6"},child:[]}]})(props);
}
export default TbArrowDownDashed;
