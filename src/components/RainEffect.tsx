import { useEffect, useState } from "react";

interface Drop {
  id: number;
  left: string;
  duration: string;
  delay: string;
  height: string;
  opacity: number;
}

export function RainEffect() {
  const [drops, setDrops] = useState<Drop[]>([]);

  useEffect(() => {
    // Generate 45 unique drops for the cinema atmosphere
    const generatedDrops: Drop[] = Array.from({ length: 45 }).map((_, i) => {
      const left = `${Math.random() * 100}%`;
      const duration = `${1.2 + Math.random() * 0.8}s`; // between 1.2s and 2.0s
      const delay = `${Math.random() * 4}s`; // delayed start up to 4s
      const height = `${60 + Math.random() * 60}px`; // drop length between 60px and 120px
      const opacity = 0.15 + Math.random() * 0.25; // soft golden glow

      return {
        id: i,
        left,
        duration,
        delay,
        height,
        opacity,
      };
    });

    setDrops(generatedDrops);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden select-none z-10">
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="absolute top-[-150px] w-[1px] bg-gradient-to-b from-transparent to-gold/30 animate-rain"
          style={{
            left: drop.left,
            height: drop.height,
            animationDuration: drop.duration,
            animationDelay: drop.delay,
            opacity: drop.opacity,
            transform: "rotate(15deg)",
          }}
        />
      ))}
    </div>
  );
}
