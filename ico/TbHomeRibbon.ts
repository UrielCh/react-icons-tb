import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * HomeRibbon icon from Tabler Icons
 * @module
 */
export function TbHomeRibbon(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 15h5v7l-2.5 -1.5l-2.5 1.5z"}},{tag:"path",attr:{d:"M20 11l-8 -8l-9 9h2v7a2 2 0 0 0 2 2h5"},child:[]},{tag:"path",attr:{d:"M9 21v-6a2 2 0 0 1 2 -2h1.5"},child:[]}]})(props);
}
export default TbHomeRibbon;
