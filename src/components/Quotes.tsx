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
        Whenever RPS felt like a chaotic movie set, you brought the perfect Zen energy. Between reminding us to breathe and dropping SRK dialogues, you were the truest <span className="font-script italic text-gold-bright">Om Shanti Om</span> of the studio.
      </>
    ),
    by: "A grateful Team Lead",
  },
  {
    id: "q2",
    text: (
      <>
        Pavitra managed operations like she manages her Yoga poses with perfect balance and an unwavering focus. And whenever we needed strength, her Har Har Mahadev spirit was contagious. <span className="font-script italic text-gold-bright">Sachi mohabbat zindagi mein sirf ek baar hoti hai</span>, and a leader like you comes only once too.
      </>
    ),
    by: "The Ops Squad",
  },
  {
    id: "q3",
    text: (
      <>
        You always said the universe conspires to make things happen. <span className="font-script italic text-gold-bright">Itni shiddat se maine tumhe paane ki koshish ki hai, ki har zarre ne mujhe tumse milane ki saazish ki hai.</span> Thank you for conspiring to make our time at RPS so incredibly smooth. Enjoy those beautiful Goan sunsets!
      </>
    ),
    by: "The Design Team",
  },
  {
    id: "q4",
    text: (
      <>
        Life is very unfair because the person leaving us is not just our Head of Operations but also our spiritual anchor. <span className="font-script italic text-gold-bright">Kuch kuch hota hai</span> when we think about you leaving. May Lord Shiva bless your next big blockbuster journey.
      </>
    ),
    by: "Everyone, slightly off-balance",
  },
  {
    id: "q5",
    text: (
      <>
        From clearing payments to restoring inner peace, no one else could channel <span className="font-script italic text-gold-bright">Main Hoon Na</span> energy quite like you. Keep spreading the magic, Pavitra.
      </>
    ),
    by: "Shalini from Finance",
  },
  {
    id: "q6",
    text: (
      <>
        <span className="font-script italic text-gold-bright">Bade bade studios mein</span> aisi operations head baar baar nahi milti. We will miss your Yoga tips, your Goan vibes, and most of all, your beautiful heart.
      </>
    ),
    by: "The Entire RPS Family",
  },
];

export function Quotes() {
  const quotes = staticQuotes;

  return (
    <section id="whispers" className="relative bg-curtain py-24 px-6 md:px-12 film-grain">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="font-poster text-sm tracking-[0.4em] text-accent mb-4">WHISPERS FROM THE SET</div>
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
              className="group relative bg-background/40 backdrop-blur border-gold/20 p-6 md:p-8 hover:border-gold/60 transition-all"
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
