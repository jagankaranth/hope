
import p1 from "@/assets/placeholder-1.jpg";
import p2 from "@/assets/placeholder-2.jpg";
import p3 from "@/assets/placeholder-3.jpg";

const STORAGE_KEY = "pavitra-strip-v2";
const seed = [p1, p2, p3, p1, p2, p3, p1];

export function PhotoStrip() {
  const photos = seed;

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
          <div className="font-poster text-sm tracking-[0.4em] text-accent">THE FILM REEL</div>
          <h2 className="font-display text-4xl md:text-5xl text-ivory mt-2">
            The <span className="text-gradient-gold">Film Reel</span>
          </h2>
          <p className="font-script italic text-gold-bright/80 mt-2 max-w-xl">
            70mm of memories. Drop a polaroid, paste a candid, add a scene from the
            cutting-room floor.
          </p>
        </div>
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


                </div>
              ))}

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
