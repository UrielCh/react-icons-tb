import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * LetterCSmall icon from Tabler Icons
 * @module
 */
export function TbLetterCSmall(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 10a2 2 0 1 0 -4 0v4a2 2 0 1 0 4 0"}}]})(props);
}
export default TbLetterCSmall;
