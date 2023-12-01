import Head from "next/head";
import { useState, useRef } from "react";
import PromptSuggestions from "src/app/_components/PromptSuggestions";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const theirName = router.query.id
    ? (router.query.id as string).charAt(0).toUpperCase() +
      (router.query.id as string).slice(1)
    : "";

  const promptsAndSuggestions = [
    {
      prompt: `${theirName} is surprisingly bad at…`,
      suggestions: ["cooking", "dancing", "saying 'I'm sorry!'"],
    },
    {
      prompt: `${theirName}’s most eccentric hobby…`,
      suggestions: ["watching paint dry"],
    },
    {
      prompt: `If they were an animal they'd be…`,
      suggestions: ["koala", "bear", "chipmonk"],
    },
    {
      prompt: `${theirName} sense of humor is...`,
      suggestions: ["absent", "dry", "cheesy"],
    },
    {
      prompt: `Dancing style in a few words…`,
      suggestions: ["erratic", "unhinged"],
    },
    {
      prompt: `${theirName}'s catchphrase`,
      suggestions: ["Ayyyyyy!", "iconic!"],
    },
    {
      prompt: `${theirName} has way too many…`,
      suggestions: ["umbrellas", "shirts", "phones"],
    },
    {
      prompt: `${theirName}'s most bizarre talent…`,
      suggestions: ["peels an egg in 3 sec", "falls asleep in 2 min"],
    },
    {
      prompt: `${theirName} spends weekends...`,
      suggestions: ["lost in brooklyn", "in bed", "hiking"],
    },
    {
      prompt: `A food ${theirName} would eat forever…`,
      suggestions: ["burritos", "mac and cheese"],
    },
    {
      prompt: `A food ${theirName} can't stand...`,
      suggestions: ["jello", "cilantro", "anything spicy"],
    },
    {
      prompt: `I admire ${theirName}'s ability to…`,
      suggestions: ["laugh at themselves", "get back up"],
    },
    {
      prompt: `One unique quirk is ${theirName} `,
      suggestions: ["chew with their mouth open"],
    },
    {
      prompt: `Weirdly obsessed with the song/artist`,
      suggestions: ["Britney", "Justin Timberlake"],
    },
    {
      prompt: `${theirName} is afraid of…`,
      suggestions: ["being alone", "ghosts", "robots"],
    },
    {
      prompt: `${theirName} is weirdly passionate about…`,
      suggestions: ["plants", "tacos"],
    },
    {
      prompt: `A hill ${theirName} would die on…`,
      suggestions: ["peanuts are legumes!"],
    },
    {
      prompt: `${theirName}'s personality in three words…`,
      suggestions: ["kind", "quirky"],
    },
    {
      prompt: `A childish thing they sometimes do is…`,
      suggestions: ["fart loudly", "fall asleep on the couch"],
    },
    {
      prompt: `An annoying thing ${theirName} does is..`,
      suggestions: ["snore, run late, finish the toilet paper"],
    },
    {
      prompt: `Always starts but never finishes…`,
      suggestions: ["Projects", "recipes", "art", "sentences", "sex"],
    },
    {
      prompt: `${theirName} doesn't get...`,
      suggestions: ["Tiktok", "the phrase 'slay'"],
    },
    {
      prompt: `I wish ${theirName} would......`,
      suggestions: ["stop calling", "give me attention", "wash the dishes"],
    },

    {
      prompt: `Say anything! What else do you wish to share about ${theirName}?`,
      suggestions: ["their eyes are different colors!"],
    },
  ];

  return (
    <>
      <Head>
        <title>RoastMe</title>
        <meta name="description" content="Get roasted by friends!" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <main className="flex justify-center bg-slate-100">
        <div className="container flex w-full max-w-screen-xl flex-col items-center justify-center px-4 py-12 md:w-full">
          <div className="grid items-start">
            <h2 className="rotate-[-2deg] pb-12 text-center text-4xl font-bold tracking-tight text-black">
              <span className="  rounded-md bg-black px-2 py-1 text-[hsl(280,100%,70%)] shadow-lg">
                🔥AI Roast Generator🔥
              </span>
            </h2>

            <h2 className="mx-auto rotate-[2deg] pb-5  text-center text-3xl font-bold tracking-tight  text-black ">
              Jonathan invites you
              <br />
              <span className=" ml-1 inline-block transform rounded-md bg-black px-2 py-1 text-[hsl(100,100%,100%)] drop-shadow-lg">
                to <span className="text-[hsl(280,100%,70%)]">roast</span> them
              </span>
              <br />
              <span className=" ml-1 inline-block transform rounded-md bg-black px-2 py-1 text-[hsl(100,100%,100%)] drop-shadow-lg">
                ⬇ ⬇ ⬇ <span className="text-[hsl(280,100%,70%)]"></span>
              </span>
            </h2>

            <div>
              <PromptSuggestions
                promptsAndSuggestions={promptsAndSuggestions}
              />
            </div>
            <button
              type="submit"
              className="m-5 mx-auto w-1/2 rounded-lg bg-purple-600 py-3 text-xl font-semibold text-white shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75"
            >
              Contribute your answers ➡
            </button>
            <h3 className="bold text-s mx-auto text-center italic">
              What happens next?
            </h3>
            <h4 className="bold mx-auto text-center text-xs">
              {`AI will compile everyone's answers and prepare the ultimate roast for ${theirName}`}
            </h4>
          </div>
        </div>
      </main>
    </>
  );
}
