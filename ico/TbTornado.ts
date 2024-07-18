import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Tornado icon from Tabler Icons
 * @module
 */
export function TbTornado(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 4l-18 0"}},{tag:"path",attr:{d:"M13 16l-6 0"},child:[]},{tag:"path",attr:{d:"M11 20l4 0"},child:[]},{tag:"path",attr:{d:"M6 8l14 0"},child:[]},{tag:"path",attr:{d:"M4 12l12 0"},child:[]}]})(props);
}
export default TbTornado;
