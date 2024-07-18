import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * HeartCode icon from Tabler Icons
 * @module
 */
export function TbHeartCode(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19.5 12.572l-.536 .53m-7.91 5.96l-6.554 -6.489a5 5 0 1 1 7.5 -6.567a5 5 0 1 1 7.5 6.572"}},{tag:"path",attr:{d:"M20 21l2 -2l-2 -2"},child:[]},{tag:"path",attr:{d:"M17 17l-2 2l2 2"},child:[]}]})(props);
}
export default TbHeartCode;
