import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * EyeCancel icon from Tabler Icons
 * @module
 */
export function TbEyeCancel(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}},{tag:"path",attr:{d:"M12 18c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"},child:[]},{tag:"path",attr:{d:"M19 19m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"},child:[]},{tag:"path",attr:{d:"M17 21l4 -4"},child:[]}]})(props);
}
export default TbEyeCancel;
