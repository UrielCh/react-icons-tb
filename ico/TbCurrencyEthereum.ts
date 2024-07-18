import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CurrencyEthereum icon from Tabler Icons
 * @module
 */
export function TbCurrencyEthereum(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 12l6 -9l6 9l-6 9z"}},{tag:"path",attr:{d:"M6 12l6 -3l6 3l-6 2z"},child:[]}]})(props);
}
export default TbCurrencyEthereum;
