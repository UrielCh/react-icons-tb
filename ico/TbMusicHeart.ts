import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MusicHeart icon from Tabler Icons
 * @module
 */
export function TbMusicHeart(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"}},{tag:"path",attr:{d:"M9 17v-13h10v7"},child:[]},{tag:"path",attr:{d:"M9 8h10"},child:[]},{tag:"path",attr:{d:"M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z"},child:[]}]})(props);
}
export default TbMusicHeart;
