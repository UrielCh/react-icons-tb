import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Lighter icon from Tabler Icons
 * @module
 */
export function TbLighter(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 3v16a2 2 0 0 0 2 2h5a2 2 0 0 0 2 -2v-7h-12a2 2 0 0 1 -2 -2v-5a2 2 0 0 1 2 -2h3z"}},{tag:"path",attr:{d:"M16 4l1.465 1.638a2 2 0 1 1 -3.015 .099l1.55 -1.737z"},child:[]}]})(props);
}
export default TbLighter;
