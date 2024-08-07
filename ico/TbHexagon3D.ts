import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Hexagon3D icon from Tabler Icons
 * @module
 */
export function TbHexagon3D(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 6.844a2.007 2.007 0 0 1 1 1.752v6.555c0 .728 -.394 1.399 -1.03 1.753l-6 3.844a2 2 0 0 1 -1.942 0l-6 -3.844a2.007 2.007 0 0 1 -1.029 -1.752v-6.556c0 -.729 .394 -1.4 1.029 -1.753l6 -3.583a2.05 2.05 0 0 1 2 0l6 3.584h-.03z"}},{tag:"path",attr:{d:"M12 16.5v4.5"},child:[]},{tag:"path",attr:{d:"M4.5 7.5l3.5 2.5"},child:[]},{tag:"path",attr:{d:"M16 10l4 -2.5"},child:[]},{tag:"path",attr:{d:"M12 7.5v4.5l-4 2"},child:[]},{tag:"path",attr:{d:"M12 12l4 2"},child:[]},{tag:"path",attr:{d:"M12 16.5l4 -2.5v-4l-4 -2.5l-4 2.5v4z"},child:[]}]})(props);
}
export default TbHexagon3D;
