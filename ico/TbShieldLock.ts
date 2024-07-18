import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ShieldLock icon from Tabler Icons
 * @module
 */
export function TbShieldLock(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3"}},{tag:"path",attr:{d:"M12 11m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"},child:[]},{tag:"path",attr:{d:"M12 12l0 2.5"},child:[]}]})(props);
}
export default TbShieldLock;
