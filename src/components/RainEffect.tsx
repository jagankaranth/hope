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
    // Generate 75 fine, fast raindrops for a natural cinematic drizzle
    const generatedDrops: Drop[] = Array.from({ length: 75 }).map((_, i) => {
      const left = `${Math.random() * 100}%`;
      const duration = `${0.5 + Math.random() * 0.4}s`; // between 0.5s and 0.9s (realistic rain velocity)
      const delay = `${Math.random() * 3}s`; // delayed start up to 3s
      const height = `${15 + Math.random() * 20}px`; // drop length between 15px and 35px (shorter, elegant droplets)
      const opacity = 0.06 + Math.random() * 0.12; // extremely soft, subtle golden sheen

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
