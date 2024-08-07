import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * InfoSquareRounded icon from Tabler Icons
 * @module
 */
export function TbInfoSquareRounded(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 9h.01"}},{tag:"path",attr:{d:"M11 12h1v4h1"},child:[]},{tag:"path",attr:{d:"M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z"},child:[]}]})(props);
}
export default TbInfoSquareRounded;
