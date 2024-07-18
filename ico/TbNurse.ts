import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Nurse icon from Tabler Icons
 * @module
 */
export function TbNurse(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 6c2.941 0 5.685 .847 8 2.31l-2 9.69h-12l-2 -9.691a14.93 14.93 0 0 1 8 -2.309z"}},{tag:"path",attr:{d:"M10 12h4"},child:[]},{tag:"path",attr:{d:"M12 10v4"},child:[]}]})(props);
}
export default TbNurse;
