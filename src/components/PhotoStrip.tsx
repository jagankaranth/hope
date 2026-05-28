
import r1 from "@/assets/images/reel01.jpg";
import r2 from "@/assets/images/reel02.jpg";
import r3 from "@/assets/images/reel03.jpg";
import r4 from "@/assets/images/reel04.jpg";
import r5 from "@/assets/images/reel05.jpg";
import r6 from "@/assets/images/reel06.jpg";
import r7 from "@/assets/images/reel07.jpg";
import r8 from "@/assets/images/reel08.jpg";
import r9 from "@/assets/images/reel09.jpg";
import r10 from "@/assets/images/reel10.jpg";
import r11 from "@/assets/images/reel11.jpg";
import r12 from "@/assets/images/reel12.jpg";
import r13 from "@/assets/images/reel13.jpg";
import r14 from "@/assets/images/reel14.jpg";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const STORAGE_KEY = "pavitra-strip-v2";
const seed = [r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14];

export function PhotoStrip() {
  const photos = seed;
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

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
          <div className="py-5">
            <div className="flex gap-4 pl-6 pr-32 md:pl-12 md:pr-64">
              {photos.map((src, i) => (
                <div key={i} className="relative group shrink-0">
                  <div 
                    onClick={() => setSelectedPhoto(src)}
                    className="cursor-pointer transition-transform hover:scale-105 duration-300"
                  >
                    <img
                      src={src}
                      alt={`Frame ${i + 1}`}
                      loading="lazy"
                      className="h-72 md:h-96 w-56 md:w-72 object-cover border-[3px] border-foreground/20"
                    />
                  </div>
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

      <Dialog open={!!selectedPhoto} onOpenChange={(open) => !open && setSelectedPhoto(null)}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] bg-transparent border-none shadow-none flex items-center justify-center p-0">
          <DialogTitle className="sr-only">Photo View</DialogTitle>
          {selectedPhoto && (
            <img 
              src={selectedPhoto} 
              alt="Enlarged view" 
              className="max-w-full max-h-[85vh] object-contain rounded-md" 
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
