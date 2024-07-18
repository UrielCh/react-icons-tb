import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Glass icon from Tabler Icons
 * @module
 */
export function TbGlass(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 21h8"}},{tag:"path",attr:{d:"M12 16v5"},child:[]},{tag:"path",attr:{d:"M17 5l1 6c0 3.012 -2.686 5 -6 5s-6 -1.988 -6 -5l1 -6"},child:[]},{tag:"path",attr:{d:"M12 5m-5 0a5 2 0 1 0 10 0a5 2 0 1 0 -10 0"},child:[]}]})(props);
}
export default TbGlass;
