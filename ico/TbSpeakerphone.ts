import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Speakerphone icon from Tabler Icons
 * @module
 */
export function TbSpeakerphone(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 8a3 3 0 0 1 0 6"}},{tag:"path",attr:{d:"M10 8v11a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1v-5"},child:[]},{tag:"path",attr:{d:"M12 8h0l4.524 -3.77a.9 .9 0 0 1 1.476 .692v12.156a.9 .9 0 0 1 -1.476 .692l-4.524 -3.77h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h8"},child:[]}]})(props);
}
export default TbSpeakerphone;
