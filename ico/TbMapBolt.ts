import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MapBolt icon from Tabler Icons
 * @module
 */
export function TbMapBolt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M13 19l-4 -2l-6 3v-13l6 -3l6 3l6 -3v8.5"}},{tag:"path",attr:{d:"M9 4v13"},child:[]},{tag:"path",attr:{d:"M15 7v7.5"},child:[]},{tag:"path",attr:{d:"M19 16l-2 3h4l-2 3"},child:[]}]})(props);
}
export default TbMapBolt;
