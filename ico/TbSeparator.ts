import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Separator icon from Tabler Icons
 * @module
 */
export function TbSeparator(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 12l0 .01"}},{tag:"path",attr:{d:"M7 12l10 0"},child:[]},{tag:"path",attr:{d:"M21 12l0 .01"},child:[]}]})(props);
}
export default TbSeparator;
