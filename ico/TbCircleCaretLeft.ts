import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CircleCaretLeft icon from Tabler Icons
 * @module
 */
export function TbCircleCaretLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 12l4 -4v8z"}},{tag:"path",attr:{d:"M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18z"},child:[]}]})(props);
}
export default TbCircleCaretLeft;
