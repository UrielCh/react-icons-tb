import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * LineDotted icon from Tabler Icons
 * @module
 */
export function TbLineDotted(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 12v.01"}},{tag:"path",attr:{d:"M8 12v.01"},child:[]},{tag:"path",attr:{d:"M12 12v.01"},child:[]},{tag:"path",attr:{d:"M16 12v.01"},child:[]},{tag:"path",attr:{d:"M20 12v.01"},child:[]}]})(props);
}
export default TbLineDotted;
