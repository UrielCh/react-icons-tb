import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Whirl icon from Tabler Icons
 * @module
 */
export function TbWhirl(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"}},{tag:"path",attr:{d:"M12 21c-3.314 0 -6 -2.462 -6 -5.5s2.686 -5.5 6 -5.5"},child:[]},{tag:"path",attr:{d:"M21 12c0 3.314 -2.462 6 -5.5 6s-5.5 -2.686 -5.5 -6"},child:[]},{tag:"path",attr:{d:"M12 14c3.314 0 6 -2.462 6 -5.5s-2.686 -5.5 -6 -5.5"},child:[]},{tag:"path",attr:{d:"M14 12c0 -3.314 -2.462 -6 -5.5 -6s-5.5 2.686 -5.5 6"},child:[]}]})(props);
}
export default TbWhirl;
