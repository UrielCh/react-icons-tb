import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * GlassFilled icon from Tabler Icons
 * @module
 */
export function TbGlassFilled(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M12 2c3.205 0 5.894 1.05 5.997 2.89l.99 5.946l.013 .164c0 3.226 -2.56 5.564 -6 5.945v3.055h3a1 1 0 0 1 0 2h-8a1 1 0 0 1 0 -2h3v-3.055c-3.44 -.38 -6 -2.719 -6 -5.945l.014 -.164l.991 -5.955l.001 -.038c.146 -1.81 2.817 -2.843 5.994 -2.843m0 2c-1.224 0 -2.359 .192 -3.164 .514c-.594 .238 -.836 .467 -.836 .486c0 .02 .242 .248 .836 .486c.804 .322 1.94 .514 3.164 .514s2.359 -.192 3.164 -.514c.594 -.238 .836 -.467 .836 -.486l-.02 -.026c-.07 -.07 -.321 -.262 -.816 -.46c-.804 -.322 -1.94 -.514 -3.164 -.514"}}]})(props);
}
export default TbGlassFilled;
