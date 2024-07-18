import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Coins icon from Tabler Icons
 * @module
 */
export function TbCoins(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 14c0 1.657 2.686 3 6 3s6 -1.343 6 -3s-2.686 -3 -6 -3s-6 1.343 -6 3z"}},{tag:"path",attr:{d:"M9 14v4c0 1.656 2.686 3 6 3s6 -1.344 6 -3v-4"},child:[]},{tag:"path",attr:{d:"M3 6c0 1.072 1.144 2.062 3 2.598s4.144 .536 6 0c1.856 -.536 3 -1.526 3 -2.598c0 -1.072 -1.144 -2.062 -3 -2.598s-4.144 -.536 -6 0c-1.856 .536 -3 1.526 -3 2.598z"},child:[]},{tag:"path",attr:{d:"M3 6v10c0 .888 .772 1.45 2 2"},child:[]},{tag:"path",attr:{d:"M3 11c0 .888 .772 1.45 2 2"},child:[]}]})(props);
}
export default TbCoins;
