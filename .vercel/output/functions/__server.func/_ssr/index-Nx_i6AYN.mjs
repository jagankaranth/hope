import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { R as Root, P as Portal, a as Content, C as Close, T as Title, O as Overlay, D as Description } from "../_libs/radix-ui__react-dialog.mjs";
import { Q as Quote, X } from "../_libs/lucide-react.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
const heroBg = "/assets/hero-bg-BC23P0zG.jpg";
const rpsLogo = "/assets/rock_paper_scissors_logo-Dy1ErWaK.svg";
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-screen w-full overflow-hidden film-grain bg-poster", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: heroBg,
        alt: "",
        "aria-hidden": true,
        className: "absolute inset-0 h-full w-full object-cover opacity-35 mix-blend-luminosity"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/50 via-background/65 to-background" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 border-b border-gold/30 bg-background/40 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-6 py-3 md:px-12 text-[10px] md:text-xs font-poster tracking-[0.35em] text-gold", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "★ NOW SHOWING ★" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-ivory/60", children: "SCREEN 01 · ALL SHOWS HOUSEFULL" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex absolute top-24 left-6 z-10 flex-col items-center gap-1 border border-gold/50 px-3 py-2 rotate-[-6deg] bg-background/50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-poster text-[9px] tracking-[0.3em] text-gold", children: "CERTIFIED" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xl text-gold-bright leading-none", children: "U/A" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-poster text-[8px] tracking-[0.25em] text-ivory/60", children: "UNIVERSALLY ADORED" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex absolute top-24 right-6 z-10 flex-col items-center gap-1 border border-gold/50 px-3 py-2 rotate-[6deg] bg-background/50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-poster text-[9px] tracking-[0.3em] text-gold", children: "RATED" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xl text-gold-bright leading-none", children: "★★★★★" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-poster text-[8px] tracking-[0.25em] text-ivory/60", children: "5/5 · THE TEAM" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 flex min-h-[78vh] items-center justify-center px-6 md:px-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-6xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative md:absolute md:-top-10 left-0 md:left-2 mb-8 md:mb-0 max-w-full md:max-w-xs animate-float-up z-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-poster text-[10px] md:text-xs tracking-[0.3em] text-gold/80", children: "STARRING" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-script italic text-2xl md:text-4xl text-gold-bright text-glow leading-none mt-1", children: "Pavitra Mani" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-poster text-[10px] md:text-xs tracking-[0.25em] text-ivory/70 mt-2 leading-relaxed", children: [
          "AS THE ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-gold-bright text-[11px] md:text-sm", children: "H" }),
          "EAD ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-gold-bright text-[11px] md:text-sm", children: "O" }),
          "F ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-gold-bright text-[11px] md:text-sm", children: "P" }),
          "ROJECT,",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", { className: "hidden md:block" }),
          " OPERATIONS & ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-gold-bright text-[11px] md:text-sm", children: "E" }),
          "XCELLENCE"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mb-6 md:mb-16 animate-float-up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-poster text-[10px] md:text-xs tracking-[0.5em] text-ivory/60 flex flex-col items-center justify-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: rpsLogo, alt: "Rock Paper Scissors Logo", className: "h-8 md:h-12 w-auto opacity-80" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "PRESENTS" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h1",
        {
          className: "font-display font-black text-center leading-[0.82] text-gradient-gold animate-flicker select-none tracking-tight",
          style: { fontSize: "clamp(6.5rem, 26vw, 21rem)" },
          children: "HOPE"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "relative md:absolute md:-bottom-28 right-0 md:right-2 mt-6 md:mt-0 max-w-full md:max-w-md text-right animate-float-up z-20",
          style: { animationDelay: "0.3s" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-poster text-[10px] md:text-xs tracking-[0.3em] text-gold/80", children: "A FILM CALLED" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-script italic text-2xl md:text-4xl text-gold-bright text-glow leading-none mt-1", children: [
              "Kabhi Alvida",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", { className: "hidden md:block" }),
              " Naa Kehna"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-poster text-[10px] md:text-xs tracking-[0.25em] text-ivory/70 mt-2", children: "NEVER SAY GOODBYE" })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 text-center px-6 mt-6 md:mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-script italic text-lg md:text-2xl text-ivory/90", children: "Picture abhi baaki hai, mere dost." }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 mt-10 border-t border-gold/30 bg-background/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-2 px-6 md:px-12 py-5 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-poster text-[9px] tracking-[0.3em] text-gold/70", children: "DIRECTED BY" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-script italic text-ivory mt-1", children: "Life Itself" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-poster text-[9px] tracking-[0.3em] text-gold/70", children: "MUSIC BY" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-script italic text-ivory mt-1", children: "Shah Rukh Khan" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-poster text-[9px] tracking-[0.3em] text-gold/70", children: "CHOREOGRAPHY" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-script italic text-ivory mt-1", children: "Yoga & Inner Peace" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-poster text-[9px] tracking-[0.3em] text-gold/70", children: "PRODUCED BY" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-script italic text-ivory mt-1", children: "The Whole Team" })
      ] })
    ] }) })
  ] });
}
const placeholder = "/assets/pavitra-portrait-C1SdBPPC.jpg";
const traits = [
  { label: "Genre", value: "Filmy Yogini" },
  { label: "Soundtrack", value: "Anything Shah Rukh" },
  { label: "Favourite Set", value: "A Quiet Goan Beach" },
  { label: "Signature Pose", value: "Tadasana at Sunrise" },
  { label: "Devotion", value: "Har Har Mahadev 🔱" },
  { label: "Box Office", value: "Always a Blockbuster" }
];
function StarringRole() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "leading-lady", className: "relative px-6 md:px-12 py-20 max-w-7xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-5 gap-10 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/5] overflow-hidden rounded-sm shadow-poster border-2 border-gold/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: placeholder,
            alt: "Pavitra as the leading lady",
            loading: "lazy",
            width: 800,
            height: 1e3,
            className: "h-full w-full object-cover"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-4 left-4 font-poster text-xs tracking-[0.3em] text-gold-bright", children: "★ LEADING LADY ★" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-3 -right-3 bg-accent text-accent-foreground font-poster px-3 py-1 text-xs tracking-widest rotate-6 shadow-gold-glow", children: "BLOCKBUSTER" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-4 -left-4 bg-background border border-gold/50 px-3 py-1 font-poster text-[10px] tracking-[0.3em] text-gold -rotate-3", children: "HOUSEFULL · ALL SHOWS" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-3 space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-poster text-sm tracking-[0.4em] text-accent", children: "THE LEADING LADY" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl md:text-6xl text-ivory leading-tight", children: [
        "Pavitra ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "Mani" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 text-ivory/90 leading-relaxed text-base md:text-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "As the Head of Project Operations and Excellence at Rock Paper Scissors Studio, Pavitra didn’t just manage workflows but directed our daily lives with the flair of a classic Shah Rukh Khan blockbuster. Whether she was clearing payments or preventing the entire studio from descending into complete chaos, she did it all with the unshakable balance of a seasoned yoga instructor. After all, she knew that ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-script italic text-gold-bright", children: "bade bade studios mein aisi chhoti chhoti baatein hoti rehti hai" }),
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "While the rest of the team scrambled to meet deadlines, she remained our spiritual anchor. She drew quiet strength from her devotion to Lord Shiva to keep us all grounded. Every operational fire was put out with a gentle reminder to breathe, a perfectly timed Bollywood dialogue, and a warm smile. She wasn't just keeping the studio running. She was the heartbeat of our everyday production, spreading that ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-script italic text-gold-bright", children: "Main Hoon Na" }),
          " energy whenever we needed saving."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3 pt-4", children: traits.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-2 border-gold/60 pl-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-poster text-[10px] tracking-[0.3em] text-gold/70", children: t.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-script italic text-ivory", children: t.value })
      ] }, t.label)) })
    ] })
  ] }) });
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Card = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      className: cn("rounded-xl border bg-card text-card-foreground shadow", className),
      ...props
    }
  )
);
Card.displayName = "Card";
const CardHeader = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("flex flex-col space-y-1.5 p-6", className), ...props })
);
CardHeader.displayName = "CardHeader";
const CardTitle = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      className: cn("font-semibold leading-none tracking-tight", className),
      ...props
    }
  )
);
CardTitle.displayName = "CardTitle";
const CardDescription = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("text-sm text-muted-foreground", className), ...props })
);
CardDescription.displayName = "CardDescription";
const CardContent = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("p-6 pt-0", className), ...props })
);
CardContent.displayName = "CardContent";
const CardFooter = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("flex items-center p-6 pt-0", className), ...props })
);
CardFooter.displayName = "CardFooter";
const staticQuotes = [
  {
    id: "q1",
    text: /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: "Hi Pavitra, first of all, thank you for being my first therapist (I will never forget that day). To me, you’ve always been the brightest star at RPS. I hope you carry that spark forever and spread your light everywhere you go. We will definitely miss you." }),
    by: "Harshitha Ennamuri"
  },
  {
    id: "q2",
    text: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      `While we bid you a tearful goodbye, with the mandatory "tussi na jao!" I'd like to say ki `,
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-script italic text-gold-bright", children: '"picture abhi baaki hai, mere dost!"' })
    ] }),
    by: "Nikhil Gadkar"
  },
  {
    id: "q3",
    text: /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: "Dear Pavitra, from my very first day at RPS, you were there—guiding me through onboarding, answering endless questions, and keeping me on track. You made joining a new company feel easy and less overwhelming. To me, you will always be the one who helped me grow. Plus, life is unfair: who is going to restore our balance and inner peace now that our Operations Head and resident Yoga Instructor is leaving? 😄 Wishing you happiness and peace on your next adventure. Hopefully we'll meet in Goa soon, pretending to meditate by the seashore while actually laughing over our shared memories! 🌊🧘‍♀️ You will truly be missed. ❤️" }),
    by: "Jagan Karanth"
  }
];
function Quotes() {
  const quotes = staticQuotes;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "whispers", className: "relative bg-curtain py-24 px-6 md:px-12 film-grain", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-poster text-sm tracking-[0.4em] text-ivory mb-4", children: "WHISPERS FROM THE SET" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl md:text-5xl text-ivory mt-2", children: [
        "Whispers from the ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "Set" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-script italic text-ivory/80 mt-3 max-w-2xl mx-auto", children: "What the cast & crew have to say between takes. Every story comes with its own little Bollywood dialogue, the way Pavitra would've wanted it." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-6", children: quotes.map((q, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Card,
      {
        className: `group relative bg-background/40 backdrop-blur border-gold/20 p-6 md:p-8 hover:border-gold/60 transition-all ${i === 2 ? "md:col-span-2" : ""}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "h-8 w-8 text-gold/60 mb-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-script italic text-lg md:text-xl text-ivory leading-relaxed", children: q.text }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-gold" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-poster text-xs tracking-[0.3em] text-gold", children: q.by.toUpperCase() })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-3 right-4 font-poster text-[10px] tracking-[0.3em] text-gold/40", children: [
            "TAKE ",
            String(i + 1).padStart(2, "0")
          ] })
        ]
      },
      q.id
    )) })
  ] }) });
}
const r1 = "/assets/reel01-C-_STu9o.jpg";
const r2 = "/assets/reel02-CkhduBAF.jpg";
const r3 = "/assets/reel03-7q5oG_xT.jpg";
const r4 = "/assets/reel04-D3xZ_k5c.jpg";
const r5 = "/assets/reel05-BIgLYICs.jpg";
const r6 = "/assets/reel06-D2uD9X3S.jpg";
const r7 = "/assets/reel07-DnOhUh1P.jpg";
const r8 = "/assets/reel08-DB8rONHF.jpg";
const r9 = "/assets/reel09-DNlwEsOP.jpg";
const r10 = "/assets/reel10-BmO7UhnN.jpg";
const r11 = "/assets/reel11-CExIBzdq.jpg";
const r12 = "/assets/reel12-Djmg817H.jpg";
const r13 = "/assets/reel13-BwuqNqO-.jpg";
const r14 = "/assets/reel14-BR7DGSGu.jpg";
const Dialog = Root;
const DialogPortal = Portal;
const DialogOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = Overlay.displayName;
const DialogContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = Content.displayName;
const DialogTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = Title.displayName;
const DialogDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = Description.displayName;
const seed = [r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14];
function PhotoStrip() {
  const photos = seed;
  const [selectedPhoto, setSelectedPhoto] = reactExports.useState(null);
  const Sprockets = ({ count = 14 }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-between items-center px-2 py-1 bg-background", children: Array.from({ length: count }).map((_, j) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block h-3 w-4 rounded-[2px] bg-foreground/10" }, j)) });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "film-reel", className: "relative py-20 px-6 md:px-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-poster text-sm tracking-[0.4em] text-accent", children: "THE FILM REEL" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl md:text-5xl text-ivory mt-2", children: [
        "The ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "Film Reel" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-script italic text-gold-bright/80 mt-2 max-w-xl", children: "70mm of memories. Drop a polaroid, paste a candid, add a scene from the cutting-room floor." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative -mx-6 md:-mx-12 overflow-x-auto pb-6 film-grain", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#0a0608] py-2 shadow-poster", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sprockets, { count: 20 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-4 pl-6 pr-32 md:pl-12 md:pr-64", children: photos.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative group shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            onClick: () => setSelectedPhoto(src),
            className: "cursor-pointer transition-transform hover:scale-105 duration-300",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src,
                alt: `Frame ${i + 1}`,
                loading: "lazy",
                className: "h-72 md:h-96 w-56 md:w-72 object-cover border-[3px] border-foreground/20"
              }
            )
          }
        ) }, i)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sprockets, { count: 20 })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-4 font-poster text-[10px] tracking-[0.4em] text-gold/60", children: "◀  SCROLL THE REEL  ▶" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: !!selectedPhoto, onOpenChange: (open) => !open && setSelectedPhoto(null), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-[90vw] max-h-[90vh] bg-transparent border-none shadow-none flex items-center justify-center p-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "sr-only", children: "Photo View" }),
      selectedPhoto && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: selectedPhoto,
          alt: "Enlarged view",
          className: "max-w-full max-h-[85vh] object-contain rounded-md"
        }
      )
    ] }) })
  ] });
}
function Finale() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 px-6 md:px-12 bg-poster film-grain overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto text-center relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-poster tracking-[0.5em] text-gold mb-6", children: "★ INTERMISSION, NOT THE END ★" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-5xl md:text-7xl text-gradient-gold animate-flicker leading-tight mb-10", children: "The End?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-ivory/90 text-lg md:text-xl leading-relaxed", children: [
        "Leaving Rock Paper Scissors Studio doesn’t mean you have to look back with tears in your eyes. You are already living the dream in Goa surrounded by peaceful beaches and quiet mornings. We can already picture you doing your sunrise yoga by the ocean, channeling your inner Shah Rukh Khan swagger, and finally enjoying a life where there are absolutely zero operational crises or junior resources to manage. Because remember, ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-script italic text-gold-bright", children: "picture abhi baaki hai mere dost" }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ivory/90 text-lg md:text-xl leading-relaxed", children: "Even though you are moving on to your next big adventure, your story here will always be our favorite. As you start this beautiful new chapter, may Lord Shiva bless your path with endless peace and joy. We will miss you deeply but we know the magic is far from over." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-8 border-t border-gold/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-script italic text-2xl md:text-4xl text-ivory mt-4 flex items-center justify-center gap-3 flex-wrap", children: [
        "Lots of love from the ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: rpsLogo, alt: "Rock Paper Scissors Logo", className: "h-10 md:h-14 w-auto inline-block opacity-90" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 flex items-center justify-center gap-6 text-gold/60 text-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🎬" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🌅" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🪷" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🕉️" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "★" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 font-poster tracking-[0.5em] text-gold/40 text-xs", children: "★ THE END ★" })
  ] }) });
}
function IntermissionDivider({ label }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center justify-center py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1 bg-gradient-to-r from-transparent via-gold/50 to-gold/30" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold text-xl", children: "❋" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-poster tracking-[0.4em] text-gold text-sm md:text-base", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold text-xl", children: "❋" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1 bg-gradient-to-l from-transparent via-gold/50 to-gold/30" })
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(IntermissionDivider, { label: "THE LEADING LADY" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StarringRole, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(IntermissionDivider, { label: "WHISPERS FROM THE SET" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Quotes, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(IntermissionDivider, { label: "THE FILM REEL" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PhotoStrip, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Finale, {})
  ] });
}
export {
  Index as component
};
