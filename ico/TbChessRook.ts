import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ChessRook icon from Tabler Icons
 * @module
 */
export function TbChessRook(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 16l-1.447 .724a1 1 0 0 0 -.553 .894v2.382h12v-2.382a1 1 0 0 0 -.553 -.894l-1.447 -.724h-8z"}},{tag:"path",attr:{d:"M8 16l1 -9h6l1 9"},child:[]},{tag:"path",attr:{d:"M6 4l.5 3h11l.5 -3"},child:[]},{tag:"path",attr:{d:"M10 4v3"},child:[]},{tag:"path",attr:{d:"M14 4v3"},child:[]}]})(props);
}
export default TbChessRook;
