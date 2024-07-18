import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CurrentLocation icon from Tabler Icons
 * @module
 */
export function TbCurrentLocation(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}},{tag:"path",attr:{d:"M12 12m-8 0a8 8 0 1 0 16 0a8 8 0 1 0 -16 0"},child:[]},{tag:"path",attr:{d:"M12 2l0 2"},child:[]},{tag:"path",attr:{d:"M12 20l0 2"},child:[]},{tag:"path",attr:{d:"M20 12l2 0"},child:[]},{tag:"path",attr:{d:"M2 12l2 0"},child:[]}]})(props);
}
export default TbCurrentLocation;
