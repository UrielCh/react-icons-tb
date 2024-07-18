import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * LetterY icon from Tabler Icons
 * @module
 */
export function TbLetterY(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 4l5 9l5 -9"}},{tag:"path",attr:{d:"M12 13l0 7"},child:[]}]})(props);
}
export default TbLetterY;
