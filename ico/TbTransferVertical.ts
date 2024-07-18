import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * TransferVertical icon from Tabler Icons
 * @module
 */
export function TbTransferVertical(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 4v16l-6 -5.5"}},{tag:"path",attr:{d:"M14 20v-16l6 5.5"},child:[]}]})(props);
}
export default TbTransferVertical;
