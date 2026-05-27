import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { R as Root } from "../_libs/radix-ui__react-label.mjs";
import { P as Plus, Q as Quote, X, C as Camera } from "../_libs/lucide-react.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
const heroBg = "/assets/hero-bg-BC23P0zG.jpg";
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden md:inline text-ivory/60", children: "SCREEN 01 · ALL SHOWS HOUSEFULL" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "★ ONE NIGHT ONLY ★" })
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mb-12 md:mb-16 animate-float-up", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-poster text-[10px] md:text-xs tracking-[0.5em] text-ivory/60", children: "ROCK · PAPER · SCISSORS  PRESENTS" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -top-6 md:-top-10 left-0 md:left-2 max-w-[55%] md:max-w-xs animate-float-up z-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-poster text-[10px] md:text-xs tracking-[0.3em] text-gold/80", children: "STARRING" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-script italic text-2xl md:text-4xl text-gold-bright text-glow leading-none mt-1", children: "Pavitra Mani" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-poster text-[10px] md:text-xs tracking-[0.25em] text-ivory/70 mt-2", children: [
          "AS THE HEAD OF PRODUCT,",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "OPERATIONS & EXCELLENCE"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h1",
        {
          className: "font-display font-black text-center leading-[0.82] text-gradient-gold animate-flicker select-none tracking-tight",
          style: { fontSize: "clamp(7rem, 26vw, 21rem)" },
          children: "HOPE"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "absolute -bottom-20 md:-bottom-28 right-0 md:right-2 max-w-[60%] md:max-w-md text-right animate-float-up z-20",
          style: { animationDelay: "0.3s" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-poster text-[10px] md:text-xs tracking-[0.3em] text-gold/80", children: "A FILM CALLED" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-script italic text-2xl md:text-4xl text-gold-bright text-glow leading-none mt-1", children: [
              "Kabhi Alvida",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "Naa Kehna"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-poster text-[10px] md:text-xs tracking-[0.25em] text-ivory/70 mt-2", children: "— NEVER SAY GOODBYE —" })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 text-center px-6 mt-6 md:mt-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-script italic text-lg md:text-2xl text-ivory/90", children: "“Picture abhi baaki hai, mere dost.”" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-poster text-[10px] md:text-xs tracking-[0.4em] text-gold/70 mt-2", children: "— A BOLLYWOOD FAREWELL IN FIVE REELS —" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mt-10 border-t border-gold/30 bg-background/50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-2 px-6 md:px-12 py-5 text-center", children: [
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-script italic text-ivory mt-1", children: "Yoga & Susegad" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-poster text-[9px] tracking-[0.3em] text-gold/70", children: "PRODUCED BY" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-script italic text-ivory mt-1", children: "The Whole Team" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center gap-4 pb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "#leading-lady",
          className: "group inline-flex items-center gap-3 font-poster text-xs md:text-sm tracking-[0.3em] text-gold hover:text-gold-bright transition-colors",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block h-px w-10 bg-gold group-hover:w-16 transition-all" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "ROLL THE OPENING CREDITS" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block h-px w-10 bg-gold group-hover:w-16 transition-all" })
          ]
        }
      ) })
    ] })
  ] });
}
const p1 = "/assets/placeholder-1-UCQ0_9jH.jpg";
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
            src: p1,
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-poster text-sm tracking-[0.4em] text-accent", children: "REEL · 01 · THE LEADING LADY" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl md:text-6xl text-ivory leading-tight", children: [
        "Pavitra ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "Mani" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-2 border-gold/60 pl-4 py-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-script italic text-xl md:text-2xl text-gold-bright", children: "“Bade bade studios mein aisi chhoti chhoti baatein hoti rehti hai, Senorita…”" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-poster text-[10px] tracking-[0.3em] text-gold/60 mt-1", children: "— DDLJ, 1995 (the unofficial RPS anthem)" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-ivory/85 leading-relaxed text-base md:text-lg", children: [
        "Officially: Head of Product, Operations & Excellence. Unofficially: the",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-script italic text-gold-bright", children: " Seeta-aur-Geeta " }),
        "of the studio — Project Manager by day, secret HR superhero by night, and possibly ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-script italic text-gold-bright", children: "“Shalini from Finance”" }),
        " moonlighting on the side. She avoided talking about design like a hero avoids the villain's lair, but quietly cleared payments, onboarded new hires, and held the whole picture together."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-ivory/85 leading-relaxed text-base md:text-lg", children: [
        "When the studio felt like the climax of a Rohit Shetty film — cars flying, decks crashing — she stayed in perfect headstand. Inhaled the chaos, exhaled",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-script italic text-gold-bright", children: " susegad" }),
        ". Full",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-script italic text-gold-bright", children: " “Main Hoon Na” " }),
        "energy, with a water bottle in one hand and a yoga mat in the other."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3 pt-4", children: traits.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-2 border-gold/60 pl-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-poster text-[10px] tracking-[0.3em] text-gold/70", children: t.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-script italic text-ivory", children: t.value })
      ] }, t.label)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 border-t border-gold/20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-script italic text-lg md:text-xl text-ivory/90", children: [
          "“Don ko pakadna mushkil hi nahi, ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold-bright", children: "namumkin hai" }),
          ".”"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-poster text-[10px] tracking-[0.3em] text-gold/60 mt-1", children: "— also: getting on her calendar without a 9 AM slot." })
      ] })
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
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const Input = reactExports.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const Textarea = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Root, { ref, className: cn(labelVariants(), className), ...props }));
Label.displayName = Root.displayName;
const STORAGE_KEY$1 = "pavitra-quotes-v2";
const seed$1 = [
  {
    id: "q1",
    text: "From my very first day at RPS, you were always there — my buddy, my onboarding guide, my decoder of confusion. So much of my early journey here has your support folded into it. You made joining a new organisation feel less overwhelming and more like a film with a really kind co-star.",
    by: "A teammate you onboarded",
    dialogue: "Tum jab paida hue the, tab tum roye the, aur duniya hansi thi…",
    film: "ANAND, 1971"
  },
  {
    id: "q2",
    text: "When I was unwell, you went full Munna Bhai M.B.B.S. on me. At the offsite you basically tracked my every move with a water bottle, giving total Amrita Rao 'Jal lijiye, aap thak gaye honge' energy until I'd taken my meds.",
    by: "The Most Hydrated Designer",
    dialogue: "Tension lene ka nahi, sirf dene ka.",
    film: "MUNNA BHAI M.B.B.S., 2003"
  },
  {
    id: "q3",
    text: "Whenever the junior resources were acting like the cast of Golmaal and driving me to my absolute breaking point, you were the one who talked me off the ledge before I turned into angry Amitabh. 'Control, Uday, control' — but make it therapy.",
    by: "A grateful Team Lead",
    dialogue: "Rishtey mein toh hum tumhare baap lagte hain…",
    film: "SHAHENSHAH, 1988"
  },
  {
    id: "q4",
    text: "Pavitra didn't manage operations — she choreographed them. Every quarter felt like a Yash Chopra dance number that somehow landed on the one, in chiffon, on a hillside.",
    by: "Aarav, Engineering",
    dialogue: "Mere paas Pavitra hai.",
    film: "DEEWAR (REMIX), 1975"
  },
  {
    id: "q5",
    text: "Life is very unfair because the person leaving us is not just our Head of Operations but also our Yoga Instructor. Who is going to restore our balance and inner peace now? 😄",
    by: "Everyone, slightly off-balance",
    dialogue: "Kuch kuch hota hai… tum nahi samjhogi.",
    film: "K3H, 1998"
  },
  {
    id: "q6",
    text: "When everything was on fire, she'd quote Om Shanti Om and somehow we'd all calm down. Magic. Or maybe just Pavitra.",
    by: "The Ops Squad",
    dialogue: "Agar kisi cheez ko dil se chaaho… toh poori kaynaat use tumse milane mein lag jaati hai.",
    film: "OM SHANTI OM, 2007"
  }
];
function Quotes() {
  const [quotes, setQuotes] = reactExports.useState(seed$1);
  const [open, setOpen] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({ text: "", by: "" });
  reactExports.useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY$1);
      if (raw) setQuotes(JSON.parse(raw));
    } catch {
    }
  }, []);
  const save = (next) => {
    setQuotes(next);
    try {
      localStorage.setItem(STORAGE_KEY$1, JSON.stringify(next));
    } catch {
    }
  };
  const submit = () => {
    if (!form.text.trim() || !form.by.trim()) return;
    save([{ id: crypto.randomUUID(), ...form }, ...quotes]);
    setForm({ text: "", by: "" });
    setOpen(false);
  };
  const remove = (id) => save(quotes.filter((q) => q.id !== id));
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "whispers", className: "relative bg-curtain py-24 px-6 md:px-12 film-grain", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-poster text-sm tracking-[0.4em] text-gold-bright", children: "REEL · 02" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl md:text-5xl text-ivory mt-2", children: [
        "Whispers from the ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "Set" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-script italic text-ivory/80 mt-3 max-w-2xl mx-auto", children: "What the cast & crew have to say between takes — every story comes with its own little Bollywood dialogue, the way Pavitra would've wanted it." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        onClick: () => setOpen((o) => !o),
        variant: "outline",
        className: "font-poster tracking-[0.2em] border-gold text-gold hover:bg-gold hover:text-background",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "mr-2 h-4 w-4" }),
          " ADD YOUR LINE"
        ]
      }
    ) }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "bg-card border-gold/40 p-6 mb-10 max-w-2xl mx-auto animate-float-up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "font-poster tracking-widest text-xs text-gold", children: "YOUR DIALOGUE" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            value: form.text,
            onChange: (e) => setForm({ ...form, text: e.target.value }),
            rows: 4,
            placeholder: "A line for Pavitra...",
            className: "bg-background border-gold/30"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "font-poster tracking-widest text-xs text-gold", children: "SIGNED BY" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            value: form.by,
            onChange: (e) => setForm({ ...form, by: e.target.value }),
            placeholder: "Your name, your team",
            className: "bg-background border-gold/30"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", onClick: () => setOpen(false), className: "text-ivory/70", children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            onClick: submit,
            className: "font-poster tracking-widest bg-accent text-accent-foreground hover:bg-accent/90",
            children: "ROLL CAMERA"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-6", children: quotes.map((q, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Card,
      {
        className: "group relative bg-background/40 backdrop-blur border-gold/20 p-6 md:p-8 hover:border-gold/60 transition-all",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "h-8 w-8 text-gold/60 mb-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-script italic text-lg md:text-xl text-ivory leading-relaxed", children: [
            '"',
            q.text,
            '"'
          ] }),
          q.dialogue && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 border-l-2 border-accent/60 pl-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-script italic text-base text-gold-bright", children: [
              "“",
              q.dialogue,
              "”"
            ] }),
            q.film && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-poster text-[10px] tracking-[0.3em] text-gold/60 mt-1", children: [
              "— ",
              q.film
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-gold" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-poster text-xs tracking-[0.3em] text-gold", children: q.by.toUpperCase() })
          ] }),
          !seed$1.find((s) => s.id === q.id) && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => remove(q.id),
              className: "absolute top-3 right-3 p-1 text-ivory/40 hover:text-accent opacity-0 group-hover:opacity-100 transition",
              "aria-label": "Remove",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
            }
          ),
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
const p2 = "/assets/placeholder-2-B0OkaTpe.jpg";
const p3 = "/assets/placeholder-3-NpWVDGvz.jpg";
const STORAGE_KEY = "pavitra-strip-v2";
const seed = [p1, p2, p3, p1, p2, p3, p1];
function PhotoStrip() {
  const [photos, setPhotos] = reactExports.useState(seed);
  reactExports.useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setPhotos(JSON.parse(raw));
    } catch {
    }
  }, []);
  const save = (next) => {
    setPhotos(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
    }
  };
  const upload = (file) => {
    const r = new FileReader();
    r.onload = () => save([r.result, ...photos]);
    r.readAsDataURL(file);
  };
  const Sprockets = ({ count = 14 }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-between items-center px-2 py-1 bg-background", children: Array.from({ length: count }).map((_, j) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block h-3 w-4 rounded-[2px] bg-foreground/10" }, j)) });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "film-reel", className: "relative py-20 px-6 md:px-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-poster text-sm tracking-[0.4em] text-accent", children: "REEL · 03" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl md:text-5xl text-ivory mt-2", children: [
          "The ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "Film Reel" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-script italic text-gold-bright/80 mt-2 max-w-xl", children: "70mm of memories. Drop a polaroid, paste a candid, add a scene from the cutting-room floor." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "file",
            accept: "image/*",
            className: "hidden",
            onChange: (e) => e.target.files?.[0] && upload(e.target.files[0])
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            asChild: true,
            variant: "outline",
            className: "font-poster tracking-[0.2em] border-gold text-gold hover:bg-gold hover:text-background cursor-pointer",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "mr-2 h-4 w-4" }),
              " ADD A FRAME"
            ] })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative -mx-6 md:-mx-12 overflow-x-auto pb-6 film-grain", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#0a0608] py-2 shadow-poster", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sprockets, { count: 20 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
          photos.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src,
                alt: `Frame ${i + 1}`,
                loading: "lazy",
                className: "h-72 md:h-96 w-56 md:w-72 object-cover border-[3px] border-foreground/20"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-2 left-2 font-poster text-[10px] tracking-[0.3em] text-gold-bright bg-background/70 px-2 py-0.5", children: [
              "FRAME ",
              String(i + 1).padStart(3, "0")
            ] }),
            !seed.includes(src) && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => save(photos.filter((_, k) => k !== i)),
                className: "absolute top-2 right-2 p-1 bg-background/80 rounded-full text-ivory/70 hover:text-accent opacity-0 group-hover:opacity-100 transition",
                "aria-label": "Remove photo",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3 w-3" })
              }
            )
          ] }, i)),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "shrink-0 cursor-pointer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "file",
                accept: "image/*",
                className: "hidden",
                onChange: (e) => e.target.files?.[0] && upload(e.target.files[0])
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-72 md:h-96 w-56 md:w-72 border-2 border-dashed border-gold/40 flex flex-col items-center justify-center gap-2 hover:border-gold hover:bg-gold/5 transition", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-10 w-10 text-gold/70" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-poster text-[10px] tracking-[0.3em] text-gold/70", children: "ADD FRAME" })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sprockets, { count: 20 })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-4 font-poster text-[10px] tracking-[0.4em] text-gold/60", children: "◀  SCROLL THE REEL  ▶" })
    ] })
  ] });
}
function Finale() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 px-6 md:px-12 bg-poster film-grain overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto text-center relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-poster tracking-[0.5em] text-gold mb-6", children: "★ INTERMISSION, NOT THE END ★" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl md:text-7xl text-gradient-gold animate-flicker leading-tight", children: [
      "The End?",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-script italic text-ivory text-4xl md:text-5xl", children: "Nahi yaar, sirf interval." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-10 text-lg md:text-xl text-ivory/90 max-w-2xl mx-auto leading-relaxed", children: [
      "You don't even need to catch a train like Kajol in",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-script italic text-gold-bright", children: " DDLJ " }),
      "— you already live in Goa. So go strut down the beach in slow motion while the rest of us weep into our chai in perfect Yash Chopra lighting."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 border-y border-gold/30 py-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-script italic text-2xl md:text-3xl text-gold-bright leading-snug", children: [
        "“Tussi ja rahe ho?",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-ivory", children: "Tussi na jao!" }),
        "” 🥺"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-poster text-[10px] tracking-[0.4em] text-gold/60 mt-3", children: "— KABHI KHUSHI KABHIE GHAM, 2001" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-10 text-base md:text-lg text-ivory/85 max-w-2xl mx-auto leading-relaxed", children: [
      "May your post-RPS days be filled with Goan sunsets, endless",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-script italic text-gold-bright", children: " susegad" }),
      ", peaceful beach yoga, a little Shiva strength, a lot of Shah Rukh swagger — and exactly ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-script italic text-gold-bright", children: "zero" }),
      " junior resources to manage."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 font-script italic text-xl md:text-2xl text-gold-bright", children: "“Picture abhi baaki hai, mere dost.”" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-poster text-[10px] tracking-[0.4em] text-gold/60 mt-1", children: "— OM SHANTI OM, 2007" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-10 text-base md:text-lg text-ivory/85 italic font-script", children: "Hopefully someday we'll all meet again in Goa — sitting by the seashore, pretending to meditate, actually laughing, recollecting every scene. 🌊🧘‍♀️" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 inline-flex flex-col items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-poster tracking-[0.4em] text-gold-bright text-sm", children: "— WITH LOTS OF JADOO KI JHAPPIS —" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-2xl text-ivory", children: "The Whole RPS Team ♥" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 flex items-center justify-center gap-6 text-gold/60 text-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🎬" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🌅" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🪷" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🕉️" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "★" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 font-poster tracking-[0.5em] text-gold/40 text-xs", children: "★ THE END ★   ( OF THIS REEL ONLY )" })
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
