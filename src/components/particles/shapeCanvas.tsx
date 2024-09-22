import { useEffect, useRef, useState } from "react";
import { Canvas } from "../canvas";

import { Cube } from "./cube";

export function ShapeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canvas, setCanvas] = useState(canvasRef.current);
  const [random, setRandom] = useState(false);
  const context = canvas?.getContext("2d");

  useEffect(() => {
    const animationFrame = requestAnimationFrame(render);

    setCanvas(canvasRef.current);

    if (!context) {
      return;
    }

    const cube = new Cube({
      x: context.canvas.width * 0.7,
      y: context.canvas.height * 0.5,
      z: Math.min(context.canvas.width) * 0.5,
      size: 200,
      context,
    });

    function render(animationFrame: number) {
      if (context) {
        cube.move(animationFrame, random);
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        cube.draw(random);
      }
      requestAnimationFrame(render);
    }

    render(animationFrame);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [canvas, context, random]);

  function resizeCanvas() {
    if (!canvas || !context) {
      return;
    }
    context.canvas.height = window.innerHeight;
    context.canvas.width = window.innerWidth;
  }

  window.addEventListener("resize", resizeCanvas, false);

  return (
    <Canvas
      className="absolute"
      canvasref={canvasRef}
      height={window.innerHeight}
      width={window.innerWidth}
      onClick={() => setRandom(!random)}
    />
  );
}
