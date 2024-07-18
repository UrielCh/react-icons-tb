import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Scale icon from Tabler Icons
 * @module
 */
export function TbScale(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 20l10 0"}},{tag:"path",attr:{d:"M6 6l6 -1l6 1"},child:[]},{tag:"path",attr:{d:"M12 3l0 17"},child:[]},{tag:"path",attr:{d:"M9 12l-3 -6l-3 6a3 3 0 0 0 6 0"},child:[]},{tag:"path",attr:{d:"M21 12l-3 -6l-3 6a3 3 0 0 0 6 0"},child:[]}]})(props);
}
export default TbScale;
