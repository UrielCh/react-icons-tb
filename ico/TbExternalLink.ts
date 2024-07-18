import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ExternalLink icon from Tabler Icons
 * @module
 */
export function TbExternalLink(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"}},{tag:"path",attr:{d:"M11 13l9 -9"},child:[]},{tag:"path",attr:{d:"M15 4h5v5"},child:[]}]})(props);
}
export default TbExternalLink;
