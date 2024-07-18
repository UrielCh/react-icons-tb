import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Texture icon from Tabler Icons
 * @module
 */
export function TbTexture(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 3l-3 3"}},{tag:"path",attr:{d:"M21 18l-3 3"},child:[]},{tag:"path",attr:{d:"M11 3l-8 8"},child:[]},{tag:"path",attr:{d:"M16 3l-13 13"},child:[]},{tag:"path",attr:{d:"M21 3l-18 18"},child:[]},{tag:"path",attr:{d:"M21 8l-13 13"},child:[]},{tag:"path",attr:{d:"M21 13l-8 8"},child:[]}]})(props);
}
export default TbTexture;
