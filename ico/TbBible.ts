import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Bible icon from Tabler Icons
 * @module
 */
export function TbBible(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12z"}},{tag:"path",attr:{d:"M19 16h-12a2 2 0 0 0 -2 2"},child:[]},{tag:"path",attr:{d:"M12 7v6"},child:[]},{tag:"path",attr:{d:"M10 9h4"},child:[]}]})(props);
}
export default TbBible;
