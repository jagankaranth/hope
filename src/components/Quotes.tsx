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
    id: "q_amandeep",
    text: (
      <>
        Thank you for your kindness, support and dedication. You will be missed by all of us, and we wish you success and happiness in your next journey.
      </>
    ),
    by: "Amandeep",
  },
  {
    id: "q_vineet",
    text: (
      <>
        Wishing you all the very best, Pavitra. It’s been a pleasure working with you, and I hope your next chapter brings you great success and happiness!
      </>
    ),
    by: "Vineet Chopdekar",
  },
  {
    id: "q_prajwal",
    text: (
      <>
        Pavitra, thank you for being such an amazing part of the RPS team! Your energy and positive vibe in the studio will be truly missed. Wishing you the absolute best in your next adventure—keep doing great things!
      </>
    ),
    by: "Prajwal",
  },
  {
    id: "q_parvathy",
    text: (
      <>
        Pavitra, thank you for everything, for always being so kind and supportive. It’s been amazing working with you, and you’ll truly be missed. Wishing you all the best for what’s ahead.
      </>
    ),
    by: "Parvathy Pillai",
  },
  {
    id: "q1",
    text: (
      <>
        Working with Pavitra has been such a valuable experience. Your leadership, clarity, and calm way of handling things always made the team feel supported and motivated. Thank you for everything you’ve contributed from guiding teams through challenges. Wishing you all the success, happiness, and exciting opportunities ahead in this new chapter. You’ll truly be missed. All the very best, Pavitra!
      </>
    ),
    by: "Akhil",
  },
  {
    id: "q2",
    text: (
      <>
        Pavitra has been our Jack (of all trades) who not just started Project management but also started many new dimensions of RPS—from being reporting managers to their personal counsellor. Being their people manager to their human resource. Wore the hat of social media person to operations head. You name it and she has been part of it. Rather she has been the ROCK of Rock Paper Scissors and managed and executed many such unexpressed and unexpected roles in the company. She has been the only person whom I could rely and depend on and sometimes taken undue advantage too. It is so good and proud to see her take up the role of entrepreneur and starting her own journey which she always manifested for. So so proud and wish her the best. Hope u get many repeated customers and orders. Cheers to life.
      </>
    ),
    by: "Chandni Chadha",
  },
  {
    id: "q3",
    text: (
      <>
        Working with Pavitra Ma’am has been one of the most valuable parts of my journey at RPS. Whether it was the times I needed guidance or moments when I felt frustrated, she always supported me with patience and positivity. Apart from Shiv Sir, Pavitra Ma’am has been one of the people who truly mentored and helped shape me professionally into who I am today, and I will always be grateful for that. Wishing you all the happiness and success for your new journey. Please keep spreading the positivity that makes you so special. RPS will never be the same without you.
      </>
    ),
    by: "Vishal",
  },
  {
    id: "q4",
    text: (
      <>
        <span className="font-semibold text-gold-bright block mb-2 font-display text-sm tracking-widest">★ AN ODE TO PAVITRA ★</span>
        You answered every question,<br />
        You rescued every file,<br />
        You brightened up the office,<br />
        With your patience and your smile.<br />
        No panic when the servers crashed,<br />
        No problem too acute,<br />
        You guided us through busy days,<br />
        A highly skilled recruit.<br /><br />
        Now you are trading spreadsheets,<br />
        For a kitchen by the sea,<br />
        To brew the perfect morning cup,<br />
        And roast the coffee bean.<br /><br />
        Farewell to our great coworker,<br />
        As you start this sweet café,<br />
        We wish you endless sunny skies,<br />
        And joy in Goa everyday!
      </>
    ),
    by: "Rishi Sinha",
  },
  {
    id: "q5",
    text: (
      <>
        Even though she is Tamil, 99% of the time we spoke in English. She always brought the human element to RPS whenever I started thinking of us as just machines. She is truly one of the best "people persons" I have ever seen—someone who always takes two steps back to think and answer in the right way, while in today's world, most people speak out loud before they even think.
      </>
    ),
    by: "Vivin",
  },
  {
    id: "q6",
    text: (
      <>
        I am truly jealous of calm people, and you are one among them! Such calmness and composure in all situations is truly a treasure to have. You have always helped and clarified all my doubts, or have said “I will get back to you on this” and really gotten back :) Thank you for your huge support and I truly wish you all the very best for your upcoming adventure. Let's stay in touch!
      </>
    ),
    by: "Rajashree",
  },
  {
    id: "q7",
    text: (
      <>
        Thank you for being so much more than a People & Operations Lead. You’ve been a mentor, guide, and a huge reason behind the positive culture we experienced every day. I’ll always be grateful to you for believing in me and giving me this opportunity. Working and learning under your guidance has truly meant a lot. Your kindness, patience, and the way you made everyone feel valued is something people will always remember. You are genuinely one of the best people I’ve met, and we are all going to miss you so much. Wishing you nothing but happiness, success, and amazing things ahead.
      </>
    ),
    by: "Ananya Rao",
  },
  {
    id: "q8",
    text: (
      <>
        Hi Pavitra, first of all, thank you for being my first therapist (I will never forget that day). To me, you’ve always been the brightest star at RPS. I hope you carry that spark forever and spread your light everywhere you go. We will definitely miss you.
      </>
    ),
    by: "Harshitha Ennamuri",
  },
  {
    id: "q9",
    text: (
      <>
        While we bid you a tearful goodbye, with the mandatory "tussi na jao!" I'd like to say ki <span className="font-script italic text-gold-bright">"picture abhi baaki hai, mere dost!"</span>
      </>
    ),
    by: "Nikhil Gadkar",
  },
  {
    id: "q10",
    text: (
      <>
        From my very first day at RPS, you were there, guiding me through onboarding, answering endless questions, and keeping me on track. You made joining a new company feel easy and less overwhelming. To me, you will always be the one who helped me grow. Plus, life is unfair: who is going to restore our balance and inner peace now that our Operations Head and resident Yoga Instructor is leaving? Wishing you happiness and peace on your next adventure. Hopefully we'll meet in Goa soon, pretending to meditate by the seashore while actually laughing over our shared memories! You will truly be missed.
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
