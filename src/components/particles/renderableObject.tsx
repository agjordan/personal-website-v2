export class RenderableObject {
  initialX: number;
  initialY: number;
  x: number;
  y: number;
  z: number;
  size: number;
  initialSize: number;
  context: CanvasRenderingContext2D;

  constructor({
    x,
    y,
    z,
    size,
    context,
  }: {
    x: number;
    y: number;
    z: number;
    size: number;
    context: CanvasRenderingContext2D;
  }) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.initialX = x;
    this.initialY = y;
    this.size = size;
    this.initialSize = size;
    this.context = context;
  }
}
