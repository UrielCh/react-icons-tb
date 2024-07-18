import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Overline icon from Tabler Icons
 * @module
 */
export function TbOverline(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 9v5a5 5 0 0 0 10 0v-5"}},{tag:"path",attr:{d:"M5 5h14"},child:[]}]})(props);
}
export default TbOverline;
