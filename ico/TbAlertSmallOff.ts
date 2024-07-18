import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * AlertSmallOff icon from Tabler Icons
 * @module
 */
export function TbAlertSmallOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 16h.01"}},{tag:"path",attr:{d:"M12 7v1"},child:[]},{tag:"path",attr:{d:"M3 3l18 18"},child:[]}]})(props);
}
export default TbAlertSmallOff;
