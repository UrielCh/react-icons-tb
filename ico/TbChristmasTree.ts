import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ChristmasTree icon from Tabler Icons
 * @module
 */
export function TbChristmasTree(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 3l4 4l-2 1l4 4l-3 1l4 4h-14l4 -4l-3 -1l4 -4l-2 -1z"}},{tag:"path",attr:{d:"M14 17v3a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-3"},child:[]}]})(props);
}
export default TbChristmasTree;
