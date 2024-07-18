import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Plant icon from Tabler Icons
 * @module
 */
export function TbPlant(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 15h10v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2v-4z"}},{tag:"path",attr:{d:"M12 9a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3"},child:[]},{tag:"path",attr:{d:"M12 11a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3"},child:[]},{tag:"path",attr:{d:"M12 15l0 -6"},child:[]}]})(props);
}
export default TbPlant;
