import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { StarringRole } from "@/components/StarringRole";
import { Quotes } from "@/components/Quotes";
import { PhotoStrip } from "@/components/PhotoStrip";
import { Finale } from "@/components/Finale";
import { IntermissionDivider } from "@/components/IntermissionDivider";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HOPE · A Farewell to Pavitra Mani" },
      {
        name: "description",
        content:
          "A Bollywood-style cinematic farewell tribute to Pavitra Mani — whispers from the set, a giant film reel of memories, and dialogues she'd approve of.",
      },
      { property: "og:title", content: "HOPE · Kabhi Alvida Naa Kehna · Pavitra Mani" },
      {
        property: "og:description",
        content: "Roll the reel on Pavitra's chapter with us. Add a memory, drop a frame.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <IntermissionDivider label="THE LEADING LADY" />
      <StarringRole />
      <IntermissionDivider label="WHISPERS FROM THE SET" />
      <Quotes />
      <IntermissionDivider label="THE FILM REEL" />
      <PhotoStrip />
      <Finale />
    </main>
  );
}
