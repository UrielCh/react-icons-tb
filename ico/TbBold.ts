import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Bold icon from Tabler Icons
 * @module
 */
export function TbBold(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 5h6a3.5 3.5 0 0 1 0 7h-6z"}},{tag:"path",attr:{d:"M13 12h1a3.5 3.5 0 0 1 0 7h-7v-7"},child:[]}]})(props);
}
export default TbBold;
