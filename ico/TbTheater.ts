import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Theater icon from Tabler Icons
 * @module
 */
export function TbTheater(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 20h16"}},{tag:"path",attr:{d:"M20 16v-10a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v10l4 -6c2.667 1.333 5.333 1.333 8 0l4 6z"},child:[]}]})(props);
}
export default TbTheater;
