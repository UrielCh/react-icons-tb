import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Seeding icon from Tabler Icons
 * @module
 */
export function TbSeeding(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 10a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3"}},{tag:"path",attr:{d:"M12 14a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3"},child:[]},{tag:"path",attr:{d:"M12 20l0 -10"},child:[]}]})(props);
}
export default TbSeeding;
