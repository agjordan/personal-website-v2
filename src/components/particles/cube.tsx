import { Point } from "./point";
import { RenderableObject } from "./renderableObject";

export class Cube extends RenderableObject {
  vertices: Point[];
  randomPoints: Point[];
  edges: [number, number][];
  speedX: number = 0.005;
  speedY: number = 0.015;
  speedZ: number = 0.01;
  lastTime = 0;
  divisions = 10;
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
    super({
      x,
      y,
      z,
      size,
      context,
    });
    this.vertices = [
      new Point(x - size, y - size, z - size),
      new Point(x + size, y - size, z - size),
      new Point(x + size, y + size, z - size),
      new Point(x - size, y + size, z - size),
      new Point(x - size, y - size, z + size),
      new Point(x + size, y - size, z + size),
      new Point(x + size, y + size, z + size),
      new Point(x - size, y + size, z + size),
    ];
    this.randomPoints = Array(this.divisions * 12)
      .fill(1)
      .map(
        (_x) =>
          new Point(
            randomInt(this.context.canvas.height) * 1.5,
            randomInt(this.context.canvas.width) * 1.5,
            randomInt(this.context.canvas.height) * 1.5,
          ),
      );

    this.edges = [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0],
      [4, 5],
      [5, 6],
      [6, 7],
      [7, 4],
      [0, 4],
      [1, 5],
      [2, 6],
      [3, 7],
    ];
  }

  draw(random?: boolean) {
    this.context.beginPath();
    const vertices = random ? this.randomPoints : this.vertices;

    for (const v of vertices) {
      const size = getSize(v.z);
      this.context.roundRect(v.x - size / 2, v.y - size / 2, size, size, 100);
      this.context.fill();
    }

    if (!random) {
      for (const edge of this.edges) {
        const divisions = this.divisions;

        const node0 = vertices[edge[0]];
        const node1 = vertices[edge[1]];

        const dx = (node0.x - node1.x) / divisions;
        const dy = (node0.y - node1.y) / divisions;
        const dz = (node0.z - node1.z) / divisions;

        for (let i = 1; i < divisions; i++) {
          const size = getSize(node1.z + i * dz);
          this.context.roundRect(
            node1.x + i * dx - size / 2,
            node1.y + i * dy - size / 2,
            size,
            size,
            100,
          );
          this.context.fill();
        }
      }
    }
  }

  move(timeStamp: number, random?: boolean) {
    const delta = timeStamp - this.lastTime;
    this.lastTime = timeStamp;

    const vertices = random ? this.randomPoints : this.vertices;

    let angle = delta * 0.001 * this.speedZ * Math.PI * 2;

    for (const v of vertices) {
      const dx = v.x - this.x;
      const dy = v.y - this.y;
      const x = dx * Math.cos(angle) - dy * Math.sin(angle);
      const y = dx * Math.sin(angle) + dy * Math.cos(angle);
      v.x = x + this.x;
      v.y = y + this.y;
    }

    angle = delta * 0.001 * this.speedX * Math.PI * 2;
    for (const v of vertices) {
      const dy = v.y - this.y;
      const dz = v.z - this.z;
      const y = dy * Math.cos(angle) - dz * Math.sin(angle);
      const z = dy * Math.sin(angle) + dz * Math.cos(angle);
      v.y = y + this.y;
      v.z = z + this.z;
    }

    angle = delta * 0.001 * this.speedY * Math.PI * 2;
    for (const v of vertices) {
      const dx = v.x - this.x;
      const dz = v.z - this.z;
      const x = dz * Math.sin(angle) + dx * Math.cos(angle);
      const z = dz * Math.cos(angle) - dx * Math.sin(angle);
      v.x = x + this.x;
      v.z = z + this.z;
    }
  }
}

function randomInt(max: number) {
  return Math.floor(Math.random() * max);
}

function getSize(number: number) {
  return (number / window.innerWidth) * 6;
}
