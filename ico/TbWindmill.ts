import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Windmill icon from Tabler Icons
 * @module
 */
export function TbWindmill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 12c2.76 0 5 -2.01 5 -4.5s-2.24 -4.5 -5 -4.5v9z"}},{tag:"path",attr:{d:"M12 12c0 2.76 2.01 5 4.5 5s4.5 -2.24 4.5 -5h-9z"},child:[]},{tag:"path",attr:{d:"M12 12c-2.76 0 -5 2.01 -5 4.5s2.24 4.5 5 4.5v-9z"},child:[]},{tag:"path",attr:{d:"M12 12c0 -2.76 -2.01 -5 -4.5 -5s-4.5 2.24 -4.5 5h9z"},child:[]}]})(props);
}
export default TbWindmill;
