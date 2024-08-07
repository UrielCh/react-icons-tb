import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CaretLeftRight icon from Tabler Icons
 * @module
 */
export function TbCaretLeftRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 18l6 -6l-6 -6v12"}},{tag:"path",attr:{d:"M10 18l-6 -6l6 -6v12"},child:[]}]})(props);
}
export default TbCaretLeftRight;
