import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BrandLinktree icon from Tabler Icons
 * @module
 */
export function TbBrandLinktree(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 10h16"}},{tag:"path",attr:{d:"M6.5 4.5l11 11"},child:[]},{tag:"path",attr:{d:"M6.5 15.5l11 -11"},child:[]},{tag:"path",attr:{d:"M12 10v-8"},child:[]},{tag:"path",attr:{d:"M12 15v7"},child:[]}]})(props);
}
export default TbBrandLinktree;
