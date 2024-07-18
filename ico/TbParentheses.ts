import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Parentheses icon from Tabler Icons
 * @module
 */
export function TbParentheses(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 4a12.25 12.25 0 0 0 0 16"}},{tag:"path",attr:{d:"M17 4a12.25 12.25 0 0 1 0 16"},child:[]}]})(props);
}
export default TbParentheses;
