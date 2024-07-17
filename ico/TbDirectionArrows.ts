import { GenIcon, type IconBaseProps } from "../deps.ts";

export function TbDirectionArrows(props: IconBaseProps) {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"}},{tag:"path",attr:{d:"M8 11l-1 1l1 1"},child:[]},{tag:"path",attr:{d:"M11 8l1 -1l1 1"},child:[]},{tag:"path",attr:{d:"M16 11l1 1l-1 1"},child:[]},{tag:"path",attr:{d:"M11 16l1 1l1 -1"},child:[]}]})(props);
}
export default TbDirectionArrows;
