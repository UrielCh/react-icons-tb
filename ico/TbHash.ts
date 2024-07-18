import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Hash icon from Tabler Icons
 * @module
 */
export function TbHash(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 9l14 0"}},{tag:"path",attr:{d:"M5 15l14 0"},child:[]},{tag:"path",attr:{d:"M11 4l-4 16"},child:[]},{tag:"path",attr:{d:"M17 4l-4 16"},child:[]}]})(props);
}
export default TbHash;
