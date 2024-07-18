import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Cell icon from Tabler Icons
 * @module
 */
export function TbCell(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 4l-4 2v5l4 2l4 -2v-5z"}},{tag:"path",attr:{d:"M12 11l4 2l4 -2v-5l-4 -2l-4 2"},child:[]},{tag:"path",attr:{d:"M8 13v5l4 2l4 -2v-5"},child:[]}]})(props);
}
export default TbCell;
