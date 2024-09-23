import { useEffect, useRef, useState } from "react";
import { Canvas } from "../canvas";

import { Cube } from "./cube";

export function ShapeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canvas, setCanvas] = useState(canvasRef.current);
  const [random, setRandom] = useState(true);
  const [clicked, setClicked] = useState(false);
  const context = canvas?.getContext("2d");

  useEffect(() => {
    const animationFrame = requestAnimationFrame(render);

    setCanvas(canvasRef.current);

    function handleClick() {
      setRandom(!random);
      setClicked(true);
    }

    const doc = document.querySelector("#root");
    doc?.addEventListener("click", handleClick);

    if (!context) {
      return;
    }

    const cube = new Cube({
      x: context.canvas.width * 0.3,
      y: context.canvas.height * 0.7,
      z: context.canvas.width * 0.5,
      size: 150,
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
      doc?.removeEventListener("click", handleClick);
    };
  }, [canvas, clicked, context, random]);

  return (
    <Canvas
      className="absolute -z-10 opacity-65"
      canvasref={canvasRef}
      height={window.innerHeight}
      width={window.innerWidth}
      onClick={() => setRandom(!random)}
    />
  );
}
