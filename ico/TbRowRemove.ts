import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * RowRemove icon from Tabler Icons
 * @module
 */
export function TbRowRemove(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 6v4a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1z"}},{tag:"path",attr:{d:"M10 16l4 4"},child:[]},{tag:"path",attr:{d:"M10 20l4 -4"},child:[]}]})(props);
}
export default TbRowRemove;
