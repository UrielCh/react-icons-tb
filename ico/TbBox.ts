import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Box icon from Tabler Icons
 * @module
 */
export function TbBox(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5"}},{tag:"path",attr:{d:"M12 12l8 -4.5"},child:[]},{tag:"path",attr:{d:"M12 12l0 9"},child:[]},{tag:"path",attr:{d:"M12 12l-8 -4.5"},child:[]}]})(props);
}
export default TbBox;
