import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ShieldCheckered icon from Tabler Icons
 * @module
 */
export function TbShieldCheckered(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3"}},{tag:"path",attr:{d:"M12 3v18"},child:[]},{tag:"path",attr:{d:"M3.5 12h17"},child:[]}]})(props);
}
export default TbShieldCheckered;
