import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Shadow icon from Tabler Icons
 * @module
 */
export function TbShadow(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}},{tag:"path",attr:{d:"M13 12h5"},child:[]},{tag:"path",attr:{d:"M13 15h4"},child:[]},{tag:"path",attr:{d:"M13 18h1"},child:[]},{tag:"path",attr:{d:"M13 9h4"},child:[]},{tag:"path",attr:{d:"M13 6h1"},child:[]}]})(props);
}
export default TbShadow;
