import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CaretUpDown icon from Tabler Icons
 * @module
 */
export function TbCaretUpDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 10l-6 -6l-6 6h12"}},{tag:"path",attr:{d:"M18 14l-6 6l-6 -6h12"},child:[]}]})(props);
}
export default TbCaretUpDown;
