import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * TransferOut icon from Tabler Icons
 * @module
 */
export function TbTransferOut(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 19v2h16v-14l-8 -4l-8 4v2"}},{tag:"path",attr:{d:"M13 14h-9"},child:[]},{tag:"path",attr:{d:"M7 11l-3 3l3 3"},child:[]}]})(props);
}
export default TbTransferOut;
