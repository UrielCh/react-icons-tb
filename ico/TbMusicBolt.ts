import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MusicBolt icon from Tabler Icons
 * @module
 */
export function TbMusicBolt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"}},{tag:"path",attr:{d:"M9 17v-13h10v8"},child:[]},{tag:"path",attr:{d:"M9 8h10"},child:[]},{tag:"path",attr:{d:"M19 16l-2 3h4l-2 3"},child:[]}]})(props);
}
export default TbMusicBolt;
