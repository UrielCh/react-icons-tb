import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * LockAccess icon from Tabler Icons
 * @module
 */
export function TbLockAccess(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 8v-2a2 2 0 0 1 2 -2h2"}},{tag:"path",attr:{d:"M4 16v2a2 2 0 0 0 2 2h2"},child:[]},{tag:"path",attr:{d:"M16 4h2a2 2 0 0 1 2 2v2"},child:[]},{tag:"path",attr:{d:"M16 20h2a2 2 0 0 0 2 -2v-2"},child:[]},{tag:"path",attr:{d:"M8 11m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z"},child:[]},{tag:"path",attr:{d:"M10 11v-2a2 2 0 1 1 4 0v2"},child:[]}]})(props);
}
export default TbLockAccess;
