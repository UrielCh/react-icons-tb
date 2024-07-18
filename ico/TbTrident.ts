import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Trident icon from Tabler Icons
 * @module
 */
export function TbTrident(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 6l2 -2v3a7 7 0 0 0 14 0v-3l2 2"}},{tag:"path",attr:{d:"M12 21v-18l-2 2m4 0l-2 -2"},child:[]}]})(props);
}
export default TbTrident;
