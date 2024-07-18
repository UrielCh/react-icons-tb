import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SignalLte icon from Tabler Icons
 * @module
 */
export function TbSignalLte(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 8h-4v8h4"}},{tag:"path",attr:{d:"M17 12h2.5"},child:[]},{tag:"path",attr:{d:"M4 8v8h4"},child:[]},{tag:"path",attr:{d:"M10 8h4"},child:[]},{tag:"path",attr:{d:"M12 8v8"},child:[]}]})(props);
}
export default TbSignalLte;
