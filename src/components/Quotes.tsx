import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { Label } from "@/components/ui/label";
import { Quote as QuoteIcon, Plus, X } from "lucide-react";

type Quote = { id: string; text: React.ReactNode; by: string };

const STORAGE_KEY = "pavitra-quotes-v2";

const staticQuotes: Quote[] = [
  {
    id: "q1",
    text: (
      <>
        Hi Pavitra, first of all, thank you for being my first therapist (I will never forget that day). To me, you’ve always been the brightest star at RPS. I hope you carry that spark forever and spread your light everywhere you go. We will definitely miss you.
      </>
    ),
    by: "Harshitha Ennamuri",
  },
  {
    id: "q2",
    text: (
      <>
        While we bid you a tearful goodbye, with the mandatory "tussi na jao!" I'd like to say ki <span className="font-script italic text-gold-bright">"picture abhi baaki hai, mere dost!"</span>
      </>
    ),
    by: "Nikhil Gadkar",
  },
  {
    id: "q3",
    text: (
      <>
        Dear Pavitra, from my very first day at RPS, you were there—guiding me through onboarding, answering endless questions, and keeping me on track. You made joining a new company feel easy and less overwhelming. To me, you will always be the one who helped me grow. Plus, life is unfair: who is going to restore our balance and inner peace now that our Operations Head and resident Yoga Instructor is leaving? 😄 Wishing you happiness and peace on your next adventure. Hopefully we'll meet in Goa soon, pretending to meditate by the seashore while actually laughing over our shared memories! 🌊🧘‍♀️ You will truly be missed. ❤️
      </>
    ),
    by: "Jagan Karanth",
  },
];

export function Quotes() {
  const quotes = staticQuotes;

  return (
    <section id="whispers" className="relative bg-curtain py-24 px-6 md:px-12 film-grain">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="font-poster text-sm tracking-[0.4em] text-ivory mb-4">WHISPERS FROM THE SET</div>
          <h2 className="font-display text-4xl md:text-5xl text-ivory mt-2">
            Whispers from the <span className="text-gradient-gold">Set</span>
          </h2>
          <p className="font-script italic text-ivory/80 mt-3 max-w-2xl mx-auto">
            What the cast &amp; crew have to say between takes. Every story comes with its
            own little Bollywood dialogue, the way Pavitra would've wanted it.
          </p>
        </div>


        <div className="grid md:grid-cols-2 gap-6">
          {quotes.map((q, i) => (
            <Card
              key={q.id}
              className={`group relative bg-background/40 backdrop-blur border-gold/20 p-6 md:p-8 hover:border-gold/60 transition-all ${
                i === 2 ? "md:col-span-2" : ""
              }`}
            >
              <QuoteIcon className="h-8 w-8 text-gold/60 mb-3" />
              <p className="font-script italic text-lg md:text-xl text-ivory leading-relaxed">
                {q.text}
              </p>

              <div className="mt-5 flex items-center gap-3">
                <span className="h-px w-8 bg-gold" />
                <span className="font-poster text-xs tracking-[0.3em] text-gold">
                  {q.by.toUpperCase()}
                </span>
              </div>

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
