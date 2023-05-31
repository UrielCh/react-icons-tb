import { GenIcon, type IconBaseProps } from "../deps.ts";

export function TbArrowsHorizontal(props: IconBaseProps) {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M7 8l-4 4l4 4"}},{tag:"path",attr:{d:"M17 8l4 4l-4 4"}},{tag:"path",attr:{d:"M3 12l18 0"}}]})(props);
}
export default TbArrowsHorizontal;
