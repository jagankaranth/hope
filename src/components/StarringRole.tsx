import placeholder from "@/assets/placeholder-1.jpg";

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
          <div className="font-poster text-sm tracking-[0.4em] text-accent">REEL · 01 · THE LEADING LADY</div>
          <h2 className="font-display text-4xl md:text-6xl text-ivory leading-tight">
            Pavitra <span className="text-gradient-gold">Mani</span>
          </h2>

          {/* Inline filmy dialogue */}
          <div className="border-l-2 border-gold/60 pl-4 py-1">
            <p className="font-script italic text-xl md:text-2xl text-gold-bright">
              “Bade bade studios mein aisi chhoti chhoti baatein hoti rehti hai, Senorita…”
            </p>
            <p className="font-poster text-[10px] tracking-[0.3em] text-gold/60 mt-1">
              — DDLJ, 1995 (the unofficial RPS anthem)
            </p>
          </div>

          <p className="text-ivory/85 leading-relaxed text-base md:text-lg">
            Officially: Head of Product, Operations &amp; Excellence. Unofficially: the
            <span className="font-script italic text-gold-bright"> Seeta-aur-Geeta </span>
            of the studio — Project Manager by day, secret HR superhero by night, and
            possibly <span className="font-script italic text-gold-bright">“Shalini from Finance”</span> moonlighting on the side.
            She avoided talking about design like a hero avoids the villain's lair, but
            quietly cleared payments, onboarded new hires, and held the whole picture together.
          </p>

          <p className="text-ivory/85 leading-relaxed text-base md:text-lg">
            When the studio felt like the climax of a Rohit Shetty film — cars flying,
            decks crashing — she stayed in perfect headstand. Inhaled the chaos, exhaled
            <span className="font-script italic text-gold-bright"> susegad</span>. Full
            <span className="font-script italic text-gold-bright"> “Main Hoon Na” </span>
            energy, with a water bottle in one hand and a yoga mat in the other.
          </p>

          <div className="grid grid-cols-2 gap-3 pt-4">
            {traits.map((t) => (
              <div key={t.label} className="border-l-2 border-gold/60 pl-3">
                <div className="font-poster text-[10px] tracking-[0.3em] text-gold/70">{t.label}</div>
                <div className="font-script italic text-ivory">{t.value}</div>
              </div>
            ))}
          </div>

          {/* Closing dialogue */}
          <div className="pt-4 border-t border-gold/20">
            <p className="font-script italic text-lg md:text-xl text-ivory/90">
              “Don ko pakadna mushkil hi nahi, <span className="text-gold-bright">namumkin hai</span>.”
            </p>
            <p className="font-poster text-[10px] tracking-[0.3em] text-gold/60 mt-1">
              — also: getting on her calendar without a 9 AM slot.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
