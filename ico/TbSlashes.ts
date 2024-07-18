import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Slashes icon from Tabler Icons
 * @module
 */
export function TbSlashes(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 5l-10 14"}},{tag:"path",attr:{d:"M20 5l-10 14"},child:[]}]})(props);
}
export default TbSlashes;
