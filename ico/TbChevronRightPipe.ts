import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ChevronRightPipe icon from Tabler Icons
 * @module
 */
export function TbChevronRightPipe(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 6l6 6l-6 6"}},{tag:"path",attr:{d:"M17 5v13"},child:[]}]})(props);
}
export default TbChevronRightPipe;
