import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Trophy icon from Tabler Icons
 * @module
 */
export function TbTrophy(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 21l8 0"}},{tag:"path",attr:{d:"M12 17l0 4"},child:[]},{tag:"path",attr:{d:"M7 4l10 0"},child:[]},{tag:"path",attr:{d:"M17 4v8a5 5 0 0 1 -10 0v-8"},child:[]},{tag:"path",attr:{d:"M5 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"},child:[]},{tag:"path",attr:{d:"M19 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"},child:[]}]})(props);
}
export default TbTrophy;
