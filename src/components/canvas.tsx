import { CanvasHTMLAttributes, DetailedHTMLProps } from "react";

export function Canvas(
  props: DetailedHTMLProps<
    CanvasHTMLAttributes<HTMLCanvasElement>,
    HTMLCanvasElement
  > & { canvasref: null | React.LegacyRef<HTMLCanvasElement> },
) {
  return <canvas ref={props.canvasref} {...props} />;
}
