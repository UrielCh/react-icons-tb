import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * HomeDot icon from Tabler Icons
 * @module
 */
export function TbHomeDot(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 12h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5"}},{tag:"path",attr:{d:"M19 19m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"},child:[]},{tag:"path",attr:{d:"M9 21v-6a2 2 0 0 1 2 -2h2c.641 0 1.212 .302 1.578 .771"},child:[]}]})(props);
}
export default TbHomeDot;
