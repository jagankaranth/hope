import { useEffect, useState } from "react";
import { Camera, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import p1 from "@/assets/placeholder-1.jpg";
import p2 from "@/assets/placeholder-2.jpg";
import p3 from "@/assets/placeholder-3.jpg";

const STORAGE_KEY = "pavitra-strip-v2";
const seed = [p1, p2, p3, p1, p2, p3, p1];

export function PhotoStrip() {
  const [photos, setPhotos] = useState<string[]>(seed);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setPhotos(JSON.parse(raw));
    } catch {}
  }, []);

  const save = (next: string[]) => {
    setPhotos(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {}
  };

  const upload = (file: File) => {
    const r = new FileReader();
    r.onload = () => save([r.result as string, ...photos]);
    r.readAsDataURL(file);
  };

  // Sprocket holes generator
  const Sprockets = ({ count = 14 }: { count?: number }) => (
    <div className="flex justify-between items-center px-2 py-1 bg-background">
      {Array.from({ length: count }).map((_, j) => (
        <span key={j} className="block h-3 w-4 rounded-[2px] bg-foreground/10" />
      ))}
    </div>
  );

  return (
    <section id="film-reel" className="relative py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
        <div>
          <div className="font-poster text-sm tracking-[0.4em] text-accent">REEL · 03</div>
          <h2 className="font-display text-4xl md:text-5xl text-ivory mt-2">
            The <span className="text-gradient-gold">Film Reel</span>
          </h2>
          <p className="font-script italic text-gold-bright/80 mt-2 max-w-xl">
            70mm of memories. Drop a polaroid, paste a candid, add a scene from the
            cutting-room floor.
          </p>
        </div>
        <label>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => e.target.files?.[0] && upload(e.target.files[0])}
          />
          <Button
            asChild
            variant="outline"
            className="font-poster tracking-[0.2em] border-gold text-gold hover:bg-gold hover:text-background cursor-pointer"
          >
            <span>
              <Camera className="mr-2 h-4 w-4" /> ADD A FRAME
            </span>
          </Button>
        </label>
      </div>

      {/* Giant film reel — full bleed */}
      <div className="relative -mx-6 md:-mx-12 overflow-x-auto pb-6 film-grain">
        <div className="bg-[#0a0608] py-2 shadow-poster">
          <Sprockets count={20} />
          <div className="px-4 py-5">
            <div className="flex gap-4">
              {photos.map((src, i) => (
                <div key={i} className="relative group shrink-0">
                  <img
                    src={src}
                    alt={`Frame ${i + 1}`}
                    loading="lazy"
                    className="h-72 md:h-96 w-56 md:w-72 object-cover border-[3px] border-foreground/20"
                  />
                  <div className="absolute top-2 left-2 font-poster text-[10px] tracking-[0.3em] text-gold-bright bg-background/70 px-2 py-0.5">
                    FRAME {String(i + 1).padStart(3, "0")}
                  </div>
                  {!seed.includes(src) && (
                    <button
                      onClick={() => save(photos.filter((_, k) => k !== i))}
                      className="absolute top-2 right-2 p-1 bg-background/80 rounded-full text-ivory/70 hover:text-accent opacity-0 group-hover:opacity-100 transition"
                      aria-label="Remove photo"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  )}
                </div>
              ))}
              <label className="shrink-0 cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => e.target.files?.[0] && upload(e.target.files[0])}
                />
                <div className="h-72 md:h-96 w-56 md:w-72 border-2 border-dashed border-gold/40 flex flex-col items-center justify-center gap-2 hover:border-gold hover:bg-gold/5 transition">
                  <Plus className="h-10 w-10 text-gold/70" />
                  <span className="font-poster text-[10px] tracking-[0.3em] text-gold/70">
                    ADD FRAME
                  </span>
                </div>
              </label>
            </div>
          </div>
          <Sprockets count={20} />
        </div>
        <div className="text-center mt-4 font-poster text-[10px] tracking-[0.4em] text-gold/60">
          ◀  SCROLL THE REEL  ▶
        </div>
      </div>
    </section>
  );
}
