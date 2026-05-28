import placeholder from "@/assets/images/pavitra-portrait.jpg";

const traits = [
  { label: "Genre", value: "Filmy Yogini" },
  { label: "Soundtrack", value: "Anything Shah Rukh" },
  { label: "Favourite Set", value: "A Quiet Goan Beach" },
  { label: "Signature Pose", value: "Tadasana at Sunrise" },
  { label: "Devotion", value: "Har Har Mahadev 🔱" },
  { label: "Box Office", value: "Always a Blockbuster" },
];

export function StarringRole() {
  return (
    <section id="leading-lady" className="relative px-6 md:px-12 py-20 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-5 gap-10 items-center">
        <div className="md:col-span-2 relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-poster border-2 border-gold/40">
            <img
              src={placeholder}
              alt="Pavitra as the leading lady"
              loading="lazy"
              width={800}
              height={1000}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 font-poster text-xs tracking-[0.3em] text-gold-bright">
              ★ LEADING LADY ★
            </div>
          </div>
          <div className="absolute -top-3 -right-3 bg-accent text-accent-foreground font-poster px-3 py-1 text-xs tracking-widest rotate-6 shadow-gold-glow">
            BLOCKBUSTER
          </div>
          <div className="absolute -bottom-4 -left-4 bg-background border border-gold/50 px-3 py-1 font-poster text-[10px] tracking-[0.3em] text-gold -rotate-3">
            HOUSEFULL · ALL SHOWS
          </div>
        </div>

        <div className="md:col-span-3 space-y-6">
          <div className="font-poster text-sm tracking-[0.4em] text-accent">THE LEADING LADY</div>
          <h2 className="font-display text-4xl md:text-6xl text-ivory leading-tight">
            Pavitra <span className="text-gradient-gold">Mani</span>
          </h2>

          <div className="space-y-6 text-ivory/90 leading-relaxed text-base md:text-lg">
            <p>
              As the Head of Product Operations and Excellence at Rock Paper Scissors Studio, Pavitra didn’t just manage workflows but directed our daily lives with the flair of a classic Shah Rukh Khan blockbuster. Whether she was clearing payments or preventing the entire studio from descending into complete chaos, she did it all with the unshakable balance of a seasoned yoga instructor. After all, she knew that <span className="font-script italic text-gold-bright">bade bade studios mein aisi chhoti chhoti baatein hoti rehti hai</span>.
            </p>
            <p>
              While the rest of the team scrambled to meet deadlines, she remained our spiritual anchor. She drew quiet strength from her devotion to Lord Shiva to keep us all grounded. Every operational fire was put out with a gentle reminder to breathe, a perfectly timed Bollywood dialogue, and a warm smile. She wasn't just keeping the studio running. She was the heartbeat of our everyday production, spreading that <span className="font-script italic text-gold-bright">Main Hoon Na</span> energy whenever we needed saving.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-4">
            {traits.map((t) => (
              <div key={t.label} className="border-l-2 border-gold/60 pl-3">
                <div className="font-poster text-[10px] tracking-[0.3em] text-gold/70">{t.label}</div>
                <div className="font-script italic text-ivory">{t.value}</div>
              </div>
            ))}
          </div>


        </div>
      </div>
    </section>
  );
}
