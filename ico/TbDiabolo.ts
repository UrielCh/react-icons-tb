import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Diabolo icon from Tabler Icons
 * @module
 */
export function TbDiabolo(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0"}},{tag:"path",attr:{d:"M4 6v.143a1 1 0 0 0 .048 .307l1.952 5.55l-1.964 5.67a1 1 0 0 0 -.036 .265v.065c0 1.657 3.582 3 8 3s8 -1.343 8 -3v-.065a1 1 0 0 0 -.036 -.265l-1.964 -5.67l1.952 -5.55a1 1 0 0 0 .048 -.307v-.143"},child:[]},{tag:"path",attr:{d:"M6 12c0 1.105 2.686 2 6 2s6 -.895 6 -2"},child:[]}]})(props);
}
export default TbDiabolo;
