import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Compass icon from Tabler Icons
 * @module
 */
export function TbCompass(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 16l2 -6l6 -2l-2 6l-6 2"}},{tag:"path",attr:{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"},child:[]},{tag:"path",attr:{d:"M12 3l0 2"},child:[]},{tag:"path",attr:{d:"M12 19l0 2"},child:[]},{tag:"path",attr:{d:"M3 12l2 0"},child:[]},{tag:"path",attr:{d:"M19 12l2 0"},child:[]}]})(props);
}
export default TbCompass;
