import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BrandCraft icon from Tabler Icons
 * @module
 */
export function TbBrandCraft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 4h-8a8 8 0 1 0 0 16h8a8 8 0 0 0 -8 -8a8 8 0 0 0 8 -8"}},{tag:"path",attr:{d:"M4 12h8"},child:[]},{tag:"path",attr:{d:"M12 4v16"},child:[]}]})(props);
}
export default TbBrandCraft;
