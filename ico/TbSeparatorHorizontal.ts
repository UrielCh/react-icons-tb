import { GenIcon, type IconBaseProps } from "../deps.ts";

export function TbSeparatorHorizontal(props: IconBaseProps) {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M4 12l16 0"}},{tag:"path",attr:{d:"M8 8l4 -4l4 4"}},{tag:"path",attr:{d:"M16 16l-4 4l-4 -4"}}]})(props);
}
export default TbSeparatorHorizontal;
