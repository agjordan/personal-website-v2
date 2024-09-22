import { useEffect, useRef, useState } from "react";
import { Canvas } from "../canvas";

export function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canvas, setCanvas] = useState(canvasRef.current);
  const context = canvas?.getContext("2d");

  useEffect(() => {
    let animationFrameId: number;

    setCanvas(canvasRef.current);

    if (!context) {
      return;
    }
    const sun = new Particle(
      (context.canvas.width / 4) * 3,
      context.canvas.height / 3,
      0,
      10,
    );

    const particles: Particle[] = [];
    // Array(100)
    //   .fill("x")
    //   .map(
    //     (_x) =>
    //       new Particle(
    //         context.canvas.width * Math.random(),
    //         context.canvas.height * Math.random(),
    //         0,
    //         10 * Math.random(),
    //       ),
    //   );

    const delta = window.requestAnimationFrame(draw);
    particles.push(sun);

    function render() {
      draw(delta, context, particles);
      animationFrameId = window.requestAnimationFrame(render);
    }
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [context]);

  return (
    <Canvas
      className="absolute w-screen h-screen -z-10"
      canvasref={canvasRef}
      height={window.innerHeight}
      width={window.innerWidth}
    />
  );
}

const draw = (
  delta: number,
  ctx?: CanvasRenderingContext2D | null | undefined,
  particles?: Particle[],
) => {
  if (!ctx || !particles) {
    return;
  }

  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.fill();
  particles.forEach((p) => p.draw(ctx));
  particles.forEach((p) => p.move(delta));
  ctx.fill();
};

class Particle {
  initialX: number;
  initialY: number;
  x: number;
  y: number;
  z: number;
  size: number;
  velocity: number = 0;
  angle: number = 0;

  constructor(x: number, y: number, z: number, size: number) {
    this.x = x;
    this.y = y;
    this.initialX = x;
    this.initialY = y;
    this.z = z;
    this.size = size;
  }

  move(delta: number) {
    this.x = Math.cos(delta);
    this.y = Math.sin(delta);
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "rgba(0,0,0,0.8)";
    ctx.roundRect(this.x, this.y, this.size, this.size, 100);
  }
}
