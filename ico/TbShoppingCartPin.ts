import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ShoppingCartPin icon from Tabler Icons
 * @module
 */
export function TbShoppingCartPin(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}},{tag:"path",attr:{d:"M12 17h-6v-14h-2"},child:[]},{tag:"path",attr:{d:"M6 5l14 1l-.716 5.011m-5.284 1.989h-8"},child:[]},{tag:"path",attr:{d:"M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z"},child:[]},{tag:"path",attr:{d:"M19 18v.01"},child:[]}]})(props);
}
export default TbShoppingCartPin;
