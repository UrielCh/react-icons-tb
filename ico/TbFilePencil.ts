import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FilePencil icon from Tabler Icons
 * @module
 */
export function TbFilePencil(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 3v4a1 1 0 0 0 1 1h4"}},{tag:"path",attr:{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"},child:[]},{tag:"path",attr:{d:"M10 18l5 -5a1.414 1.414 0 0 0 -2 -2l-5 5v2h2z"},child:[]}]})(props);
}
export default TbFilePencil;
