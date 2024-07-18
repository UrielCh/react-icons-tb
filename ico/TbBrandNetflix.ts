import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BrandNetflix icon from Tabler Icons
 * @module
 */
export function TbBrandNetflix(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 3l10 18h-4l-10 -18z"}},{tag:"path",attr:{d:"M5 3v18h4v-10.5"},child:[]},{tag:"path",attr:{d:"M19 21v-18h-4v10.5"},child:[]}]})(props);
}
export default TbBrandNetflix;
