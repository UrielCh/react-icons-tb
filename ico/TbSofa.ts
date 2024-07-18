import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Sofa icon from Tabler Icons
 * @module
 */
export function TbSofa(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 11a2 2 0 0 1 2 2v1h12v-1a2 2 0 1 1 4 0v5a1 1 0 0 1 -1 1h-18a1 1 0 0 1 -1 -1v-5a2 2 0 0 1 2 -2z"}},{tag:"path",attr:{d:"M4 11v-3a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v3"},child:[]},{tag:"path",attr:{d:"M12 5v9"},child:[]}]})(props);
}
export default TbSofa;
