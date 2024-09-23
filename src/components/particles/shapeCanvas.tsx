import { useEffect, useRef, useState } from "react";
import { Canvas } from "../canvas";

import { Cube } from "./cube";
import { useTheme } from "../theme-provider";

export function ShapeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [canvas, setCanvas] = useState(canvasRef.current);
  const [random, setRandom] = useState(true);
  const context = canvas?.getContext("2d");

  const { theme } = useTheme();

  let darkMode = false;

  if (theme === "system") {
    darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  } else {
    darkMode = theme === "dark";
  }

  useEffect(() => {
    const animationFrame = requestAnimationFrame(render);

    setCanvas(canvasRef.current);

    function handleClick() {
      setRandom(!random);
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
        context.fillStyle = darkMode ? "white" : "black";
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
  }, [canvas, context, random, darkMode]);

  return (
    <Canvas
      className="absolute -z-10 opacity-60"
      canvasref={canvasRef}
      height={window.innerHeight}
      width={window.innerWidth}
      onClick={() => setRandom(!random)}
    />
  );
}
