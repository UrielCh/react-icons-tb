import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * LockX icon from Tabler Icons
 * @module
 */
export function TbLockX(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M13 21h-6a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v.5"}},{tag:"path",attr:{d:"M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"},child:[]},{tag:"path",attr:{d:"M8 11v-4a4 4 0 1 1 8 0v4"},child:[]},{tag:"path",attr:{d:"M22 22l-5 -5"},child:[]},{tag:"path",attr:{d:"M17 22l5 -5"},child:[]}]})(props);
}
export default TbLockX;
