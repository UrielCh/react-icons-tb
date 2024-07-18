import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Underline icon from Tabler Icons
 * @module
 */
export function TbUnderline(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 5v5a5 5 0 0 0 10 0v-5"}},{tag:"path",attr:{d:"M5 19h14"},child:[]}]})(props);
}
export default TbUnderline;
