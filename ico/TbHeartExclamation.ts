import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * HeartExclamation icon from Tabler Icons
 * @module
 */
export function TbHeartExclamation(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15.03 17l-3.03 3l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.922 6.102"}},{tag:"path",attr:{d:"M19 16v3"},child:[]},{tag:"path",attr:{d:"M19 22v.01"},child:[]}]})(props);
}
export default TbHeartExclamation;
