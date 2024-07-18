import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * GlassFull icon from Tabler Icons
 * @module
 */
export function TbGlassFull(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 21l8 0"}},{tag:"path",attr:{d:"M12 15l0 6"},child:[]},{tag:"path",attr:{d:"M17 3l1 7c0 3.012 -2.686 5 -6 5s-6 -1.988 -6 -5l1 -7h10z"},child:[]},{tag:"path",attr:{d:"M6 10a5 5 0 0 1 6 0a5 5 0 0 0 6 0"},child:[]}]})(props);
}
export default TbGlassFull;
