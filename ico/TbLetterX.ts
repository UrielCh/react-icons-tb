import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * LetterX icon from Tabler Icons
 * @module
 */
export function TbLetterX(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 4l10 16"}},{tag:"path",attr:{d:"M17 4l-10 16"},child:[]}]})(props);
}
export default TbLetterX;
