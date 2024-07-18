import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * LockOpen icon from Tabler Icons
 * @module
 */
export function TbLockOpen(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 11m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z"}},{tag:"path",attr:{d:"M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"},child:[]},{tag:"path",attr:{d:"M8 11v-5a4 4 0 0 1 8 0"},child:[]}]})(props);
}
export default TbLockOpen;
