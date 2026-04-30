import { useEffect, useRef } from "react";
import createGlobe from "cobe";

export default function Globe3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;
    let animFrameId: number;
    let globe: ReturnType<typeof createGlobe> | null = null;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const size = 900;
    const dpr = Math.min(window.devicePixelRatio, 2);

    globe = createGlobe(canvas, {
      devicePixelRatio: dpr,
      width: size * dpr,
      height: size * dpr,
      phi: 0,
      theta: 0.2,
      dark: 1,
      diffuse: 2,
      mapSamples: 12000,
      mapBrightness: 8,
      mapBaseBrightness: 0.04,
      baseColor: [0.1, 0.07, 0.22],
      markerColor: [0.65, 0.55, 1],
      glowColor: [0.45, 0.35, 0.9],
      scale: 1,
      markers: [
        { location: [37.7595, -122.4367], size: 0.05  },
        { location: [40.7128, -74.006],   size: 0.05  },
        { location: [51.5074, -0.1278],   size: 0.045 },
        { location: [35.6762, 139.6503],  size: 0.045 },
        { location: [1.3521,  103.8198],  size: 0.04  },
        { location: [48.8566, 2.3522],    size: 0.04  },
        { location: [-33.8688, 151.2093], size: 0.04  },
        { location: [25.2048, 55.2708],   size: 0.04  },
        { location: [-23.5505, -46.6333], size: 0.035 },
        { location: [55.7558, 37.6176],   size: 0.035 },
      ],
    });

    let lastTime = 0;
    function animate(time: number) {
      // throttle to ~60 fps to avoid unnecessary redraws
      if (time - lastTime < 16) {
        animFrameId = requestAnimationFrame(animate);
        return;
      }
      lastTime = time;
      phi += 0.003;
      globe?.update({ phi });
      animFrameId = requestAnimationFrame(animate);
    }
    animFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animFrameId);
      globe?.destroy();
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center">
      <canvas
        ref={canvasRef}
        style={{ width: 900, height: 900, maxWidth: "90vw", aspectRatio: "1", background: "transparent" }}
      />
    </div>
  );
}
