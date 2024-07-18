import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CircleCaretRight icon from Tabler Icons
 * @module
 */
export function TbCircleCaretRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 12l-4 -4v8z"}},{tag:"path",attr:{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"},child:[]}]})(props);
}
export default TbCircleCaretRight;
