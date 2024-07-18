import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * LockCancel icon from Tabler Icons
 * @module
 */
export function TbLockCancel(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12.5 21h-5.5a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h10a2 2 0 0 1 1.749 1.028"}},{tag:"path",attr:{d:"M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"},child:[]},{tag:"path",attr:{d:"M8 11v-4a4 4 0 1 1 8 0v4"},child:[]},{tag:"path",attr:{d:"M19 19m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"},child:[]},{tag:"path",attr:{d:"M17 21l4 -4"},child:[]}]})(props);
}
export default TbLockCancel;
