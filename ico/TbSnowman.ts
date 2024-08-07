import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Snowman icon from Tabler Icons
 * @module
 */
export function TbSnowman(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 3a4 4 0 0 1 2.906 6.75a6 6 0 1 1 -5.81 0a4 4 0 0 1 2.904 -6.75z"}},{tag:"path",attr:{d:"M17.5 11.5l2.5 -1.5"},child:[]},{tag:"path",attr:{d:"M6.5 11.5l-2.5 -1.5"},child:[]},{tag:"path",attr:{d:"M12 13h.01"},child:[]},{tag:"path",attr:{d:"M12 16h.01"},child:[]}]})(props);
}
export default TbSnowman;
