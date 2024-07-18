import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CurrencyNano icon from Tabler Icons
 * @module
 */
export function TbCurrencyNano(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 20l10 -16"}},{tag:"path",attr:{d:"M7 12h10"},child:[]},{tag:"path",attr:{d:"M7 16h10"},child:[]},{tag:"path",attr:{d:"M17 20l-10 -16"},child:[]}]})(props);
}
export default TbCurrencyNano;
