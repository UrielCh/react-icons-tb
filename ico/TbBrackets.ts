import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Brackets icon from Tabler Icons
 * @module
 */
export function TbBrackets(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 4h-3v16h3"}},{tag:"path",attr:{d:"M16 4h3v16h-3"},child:[]}]})(props);
}
export default TbBrackets;
