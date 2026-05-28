import heroBg from "@/assets/hero-bg.jpg";
import rpsLogo from "@/assets/rock_paper_scissors_logo.svg";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden film-grain bg-poster">
      <img
        src={heroBg}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-35 mix-blend-luminosity"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/65 to-background" />

      {/* Top marquee strip — like a cinema banner */}
      <div className="relative z-10 border-b border-gold/30 bg-background/40 backdrop-blur-sm">
        <div className="flex items-center justify-between px-6 py-3 md:px-12 text-[10px] md:text-xs font-poster tracking-[0.35em] text-gold">
          <span>★ NOW SHOWING ★</span>
          <span className="hidden md:inline text-ivory/60">SCREEN 01 · ALL SHOWS HOUSEFULL</span>
          <span>★ ONE NIGHT ONLY ★</span>
        </div>
      </div>

      {/* Side certificate badges */}
      <div className="hidden md:flex absolute top-24 left-6 z-10 flex-col items-center gap-1 border border-gold/50 px-3 py-2 rotate-[-6deg] bg-background/50">
        <span className="font-poster text-[9px] tracking-[0.3em] text-gold">CERTIFIED</span>
        <span className="font-display text-xl text-gold-bright leading-none">U/A</span>
        <span className="font-poster text-[8px] tracking-[0.25em] text-ivory/60">UNIVERSALLY ADORED</span>
      </div>
      <div className="hidden md:flex absolute top-24 right-6 z-10 flex-col items-center gap-1 border border-gold/50 px-3 py-2 rotate-[6deg] bg-background/50">
        <span className="font-poster text-[9px] tracking-[0.3em] text-gold">RATED</span>
        <span className="font-display text-xl text-gold-bright leading-none">★★★★★</span>
        <span className="font-poster text-[8px] tracking-[0.25em] text-ivory/60">5/5 · THE TEAM</span>
      </div>

      {/* Big HOPE poster composition */}
      <div className="relative z-10 flex min-h-[78vh] items-center justify-center px-6 md:px-12">
        <div className="relative w-full max-w-6xl">
          {/* Top-left credit block */}
          <div className="relative md:absolute md:-top-10 left-0 md:left-2 mb-8 md:mb-0 max-w-full md:max-w-xs animate-float-up z-20">
            <div className="font-poster text-[10px] md:text-xs tracking-[0.3em] text-gold/80">STARRING</div>
            <div className="font-script italic text-2xl md:text-4xl text-gold-bright text-glow leading-none mt-1">
              Pavitra Mani
            </div>
            <div className="font-poster text-[10px] md:text-xs tracking-[0.25em] text-ivory/70 mt-2">
              AS THE HEAD OF PRODUCT,
              <br className="hidden md:block" /> OPERATIONS &amp; EXCELLENCE
            </div>
          </div>

          {/* Tiny "presents" line above */}
          <div className="text-center mb-6 md:mb-16 animate-float-up">
            <div className="font-poster text-[10px] md:text-xs tracking-[0.5em] text-ivory/60 flex flex-col items-center justify-center gap-3">
              <img src={rpsLogo} alt="Rock Paper Scissors Logo" className="h-8 md:h-12 w-auto opacity-80" />
              <span>PRESENTS</span>
            </div>
          </div>

          {/* The giant HOPE */}
          <h1
            className="font-display font-black text-center leading-[0.82] text-gradient-gold animate-flicker select-none tracking-tight"
            style={{ fontSize: "clamp(6.5rem, 26vw, 21rem)" }}
          >
            HOPE
          </h1>

          {/* Bottom-right tagline */}
          <div
            className="relative md:absolute md:-bottom-28 right-0 md:right-2 mt-6 md:mt-0 max-w-full md:max-w-md text-right animate-float-up z-20"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="font-poster text-[10px] md:text-xs tracking-[0.3em] text-gold/80">A FILM CALLED</div>
            <div className="font-script italic text-2xl md:text-4xl text-gold-bright text-glow leading-none mt-1">
              Kabhi Alvida
              <br className="hidden md:block" /> Naa Kehna
            </div>
            <div className="font-poster text-[10px] md:text-xs tracking-[0.25em] text-ivory/70 mt-2">
              NEVER SAY GOODBYE
            </div>
          </div>
        </div>
      </div>

      {/* Tagline strip */}
      <div className="relative z-10 text-center px-6 mt-6 md:mt-2">
        <p className="font-script italic text-lg md:text-2xl text-ivory/90">
          Picture abhi baaki hai, mere dost.
        </p>
      </div>

      {/* Bottom poster credits row */}
      <div className="relative z-10 mt-10 border-t border-gold/30 bg-background/50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 px-6 md:px-12 py-5 text-center">
          <div>
            <div className="font-poster text-[9px] tracking-[0.3em] text-gold/70">DIRECTED BY</div>
            <div className="font-script italic text-ivory mt-1">Life Itself</div>
          </div>
          <div>
            <div className="font-poster text-[9px] tracking-[0.3em] text-gold/70">MUSIC BY</div>
            <div className="font-script italic text-ivory mt-1">Shah Rukh Khan</div>
          </div>
          <div>
            <div className="font-poster text-[9px] tracking-[0.3em] text-gold/70">CHOREOGRAPHY</div>
            <div className="font-script italic text-ivory mt-1">Yoga &amp; Inner Peace</div>
          </div>
          <div>
            <div className="font-poster text-[9px] tracking-[0.3em] text-gold/70">PRODUCED BY</div>
            <div className="font-script italic text-ivory mt-1">The Whole Team</div>
          </div>
        </div>

      </div>
    </section>
  );
}
