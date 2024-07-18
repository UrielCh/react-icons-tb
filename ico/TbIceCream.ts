import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * IceCream icon from Tabler Icons
 * @module
 */
export function TbIceCream(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 21.5v-4.5"}},{tag:"path",attr:{d:"M8 17h8v-10a4 4 0 1 0 -8 0v10z"},child:[]},{tag:"path",attr:{d:"M8 10.5l8 -3.5"},child:[]},{tag:"path",attr:{d:"M8 14.5l8 -3.5"},child:[]}]})(props);
}
export default TbIceCream;
