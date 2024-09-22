import { RenderableObject } from "./renderableObject";

export class Particle extends RenderableObject {
  xRadius: number;
  yRadius: number;
  lastTime = 0;
  particleSpeed = 1;

  constructor({
    x,
    y,
    size,
    context,
    xRadius,
    yRadius,
  }: {
    x: number;
    y: number;
    size: number;
    context: CanvasRenderingContext2D;
    xRadius: number;
    yRadius: number;
  }) {
    super({
      x,
      y,
      size,
      context,
    });
    this.xRadius = xRadius;
    this.yRadius = yRadius;
  }

  move(timeStamp: number) {
    // const delta = timeStamp - this.lastTime * this.particleSpeed;
    this.lastTime = timeStamp;

    this.x =
      Math.random() > 0.5
        ? this.x + this.particleSpeed
        : this.x - this.particleSpeed;
    this.y =
      Math.random() > 0.5
        ? this.y + this.particleSpeed
        : this.y - this.particleSpeed;

    // this.x = this.initialX + this.xRadius * Math.cos(delta);
    // this.y = this.initialY + this.yRadius * Math.sin(delta);
    // this.size = this.initialSize + Math.sin(delta) * 3;
  }

  draw() {
    this.context.fillStyle = "rgba(0,0,0,0.8)";
    this.context.roundRect(this.x, this.y, this.size, this.size, 100);
    this.context.fill();
  }
}

// const particles = [
//   new Particle({
//     x: (context.canvas.width / 4) * 3,
//     y: context.canvas.height / 3 - 100,
//     size: 10,
//     context,
//     xRadius: 190,
//     yRadius: 50,
//   }),
//   new Particle({
//     x: (context.canvas.width / 4) * 3,
//     y: context.canvas.height / 3 - 50,
//     size: 10,
//     context,
//     xRadius: 195,
//     yRadius: 50,
//   }),
//   new Particle({
//     x: (context.canvas.width / 4) * 3,
//     y: context.canvas.height / 3,
//     size: 10,
//     context,
//     xRadius: 200,
//     yRadius: 50,
//   }),
//   new Particle({
//     x: (context.canvas.width / 4) * 3,
//     y: context.canvas.height / 3 + 50,
//     size: 10,
//     context,
//     xRadius: 195,
//     yRadius: 50,
//   }),
//   new Particle({
//     x: (context.canvas.width / 4) * 3,
//     y: context.canvas.height / 3 + 100,
//     size: 10,
//     context,
//     xRadius: 190,
//     yRadius: 50,
//   }),
// ];

//render
// particles.forEach((p) => p.move(animationFrame));
// particles.forEach((p) => p.draw());
