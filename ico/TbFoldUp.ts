import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FoldUp icon from Tabler Icons
 * @module
 */
export function TbFoldUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 13v-8l-3 3m6 0l-3 -3"}},{tag:"path",attr:{d:"M9 17l1 0"},child:[]},{tag:"path",attr:{d:"M14 17l1 0"},child:[]},{tag:"path",attr:{d:"M19 17l1 0"},child:[]},{tag:"path",attr:{d:"M4 17l1 0"},child:[]}]})(props);
}
export default TbFoldUp;
