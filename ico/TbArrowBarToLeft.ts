import { GenIcon, type IconBaseProps } from "../deps.ts";

export function TbArrowBarToLeft(props: IconBaseProps) {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M10 12l10 0"}},{tag:"path",attr:{d:"M10 12l4 4"}},{tag:"path",attr:{d:"M10 12l4 -4"}},{tag:"path",attr:{d:"M4 4l0 16"}}]})(props);
}
export default TbArrowBarToLeft;
