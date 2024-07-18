import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Lifebuoy icon from Tabler Icons
 * @module
 */
export function TbLifebuoy(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"}},{tag:"path",attr:{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"},child:[]},{tag:"path",attr:{d:"M15 15l3.35 3.35"},child:[]},{tag:"path",attr:{d:"M9 15l-3.35 3.35"},child:[]},{tag:"path",attr:{d:"M5.65 5.65l3.35 3.35"},child:[]},{tag:"path",attr:{d:"M18.35 5.65l-3.35 3.35"},child:[]}]})(props);
}
export default TbLifebuoy;
