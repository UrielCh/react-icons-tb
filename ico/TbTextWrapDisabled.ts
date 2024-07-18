import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * TextWrapDisabled icon from Tabler Icons
 * @module
 */
export function TbTextWrapDisabled(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 6l10 0"}},{tag:"path",attr:{d:"M4 18l10 0"},child:[]},{tag:"path",attr:{d:"M4 12h17l-3 -3m0 6l3 -3"},child:[]}]})(props);
}
export default TbTextWrapDisabled;
