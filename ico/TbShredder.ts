import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Shredder icon from Tabler Icons
 * @module
 */
export function TbShredder(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 10m0 1a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z"}},{tag:"path",attr:{d:"M17 10v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4m5 5v5m4 -5v2m-8 -2v3"},child:[]}]})(props);
}
export default TbShredder;
