import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Quote as QuoteIcon, Plus, X } from "lucide-react";

type Quote = { id: string; text: string; by: string; dialogue?: string; film?: string };

const STORAGE_KEY = "pavitra-quotes-v2";

const seed: Quote[] = [
  {
    id: "q1",
    text:
      "From my very first day at RPS, you were always there — my buddy, my onboarding guide, my decoder of confusion. So much of my early journey here has your support folded into it. You made joining a new organisation feel less overwhelming and more like a film with a really kind co-star.",
    by: "A teammate you onboarded",
    dialogue: "Tum jab paida hue the, tab tum roye the, aur duniya hansi thi…",
    film: "ANAND, 1971",
  },
  {
    id: "q2",
    text:
      "When I was unwell, you went full Munna Bhai M.B.B.S. on me. At the offsite you basically tracked my every move with a water bottle, giving total Amrita Rao 'Jal lijiye, aap thak gaye honge' energy until I'd taken my meds.",
    by: "The Most Hydrated Designer",
    dialogue: "Tension lene ka nahi, sirf dene ka.",
    film: "MUNNA BHAI M.B.B.S., 2003",
  },
  {
    id: "q3",
    text:
      "Whenever the junior resources were acting like the cast of Golmaal and driving me to my absolute breaking point, you were the one who talked me off the ledge before I turned into angry Amitabh. 'Control, Uday, control' — but make it therapy.",
    by: "A grateful Team Lead",
    dialogue: "Rishtey mein toh hum tumhare baap lagte hain…",
    film: "SHAHENSHAH, 1988",
  },
  {
    id: "q4",
    text:
      "Pavitra didn't manage operations — she choreographed them. Every quarter felt like a Yash Chopra dance number that somehow landed on the one, in chiffon, on a hillside.",
    by: "Aarav, Engineering",
    dialogue: "Mere paas Pavitra hai.",
    film: "DEEWAR (REMIX), 1975",
  },
  {
    id: "q5",
    text:
      "Life is very unfair because the person leaving us is not just our Head of Operations but also our Yoga Instructor. Who is going to restore our balance and inner peace now? 😄",
    by: "Everyone, slightly off-balance",
    dialogue: "Kuch kuch hota hai… tum nahi samjhogi.",
    film: "K3H, 1998",
  },
  {
    id: "q6",
    text:
      "When everything was on fire, she'd quote Om Shanti Om and somehow we'd all calm down. Magic. Or maybe just Pavitra.",
    by: "The Ops Squad",
    dialogue:
      "Agar kisi cheez ko dil se chaaho… toh poori kaynaat use tumse milane mein lag jaati hai.",
    film: "OM SHANTI OM, 2007",
  },
];

export function Quotes() {
  const [quotes, setQuotes] = useState<Quote[]>(seed);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ text: "", by: "" });

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setQuotes(JSON.parse(raw));
    } catch {}
  }, []);

  const save = (next: Quote[]) => {
    setQuotes(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {}
  };

  const submit = () => {
    if (!form.text.trim() || !form.by.trim()) return;
    save([{ id: crypto.randomUUID(), ...form }, ...quotes]);
    setForm({ text: "", by: "" });
    setOpen(false);
  };

  const remove = (id: string) => save(quotes.filter((q) => q.id !== id));

  return (
    <section id="whispers" className="relative bg-curtain py-24 px-6 md:px-12 film-grain">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="font-poster text-sm tracking-[0.4em] text-gold-bright">REEL · 02</div>
          <h2 className="font-display text-4xl md:text-5xl text-ivory mt-2">
            Whispers from the <span className="text-gradient-gold">Set</span>
          </h2>
          <p className="font-script italic text-ivory/80 mt-3 max-w-2xl mx-auto">
            What the cast &amp; crew have to say between takes — every story comes with its
            own little Bollywood dialogue, the way Pavitra would've wanted it.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <Button
            onClick={() => setOpen((o) => !o)}
            variant="outline"
            className="font-poster tracking-[0.2em] border-gold text-gold hover:bg-gold hover:text-background"
          >
            <Plus className="mr-2 h-4 w-4" /> ADD YOUR LINE
          </Button>
        </div>

        {open && (
          <Card className="bg-card border-gold/40 p-6 mb-10 max-w-2xl mx-auto animate-float-up">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label className="font-poster tracking-widest text-xs text-gold">YOUR DIALOGUE</Label>
                <Textarea
                  value={form.text}
                  onChange={(e) => setForm({ ...form, text: e.target.value })}
                  rows={4}
                  placeholder="A line for Pavitra..."
                  className="bg-background border-gold/30"
                />
              </div>
              <div className="space-y-2">
                <Label className="font-poster tracking-widest text-xs text-gold">SIGNED BY</Label>
                <Input
                  value={form.by}
                  onChange={(e) => setForm({ ...form, by: e.target.value })}
                  placeholder="Your name, your team"
                  className="bg-background border-gold/30"
                />
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="ghost" onClick={() => setOpen(false)} className="text-ivory/70">
                  Cancel
                </Button>
                <Button
                  onClick={submit}
                  className="font-poster tracking-widest bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  ROLL CAMERA
                </Button>
              </div>
            </div>
          </Card>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          {quotes.map((q, i) => (
            <Card
              key={q.id}
              className="group relative bg-background/40 backdrop-blur border-gold/20 p-6 md:p-8 hover:border-gold/60 transition-all"
            >
              <QuoteIcon className="h-8 w-8 text-gold/60 mb-3" />
              <p className="font-script italic text-lg md:text-xl text-ivory leading-relaxed">
                "{q.text}"
              </p>
              {q.dialogue && (
                <div className="mt-5 border-l-2 border-accent/60 pl-3">
                  <p className="font-script italic text-base text-gold-bright">
                    “{q.dialogue}”
                  </p>
                  {q.film && (
                    <p className="font-poster text-[10px] tracking-[0.3em] text-gold/60 mt-1">
                      — {q.film}
                    </p>
                  )}
                </div>
              )}
              <div className="mt-5 flex items-center gap-3">
                <span className="h-px w-8 bg-gold" />
                <span className="font-poster text-xs tracking-[0.3em] text-gold">
                  {q.by.toUpperCase()}
                </span>
              </div>
              {!seed.find((s) => s.id === q.id) && (
                <button
                  onClick={() => remove(q.id)}
                  className="absolute top-3 right-3 p-1 text-ivory/40 hover:text-accent opacity-0 group-hover:opacity-100 transition"
                  aria-label="Remove"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
              <div className="absolute bottom-3 right-4 font-poster text-[10px] tracking-[0.3em] text-gold/40">
                TAKE {String(i + 1).padStart(2, "0")}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
