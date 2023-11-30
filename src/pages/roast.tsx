import Head from "next/head";
import { useState, useRef } from "react";
import PromptSuggestions from "src/app/_components/PromptSuggestions";

export default function Home() {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [selectedGender, setSelectedGender] = useState("woman");
  const [displayedText, setDisplayedText] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    return 0;
  };

  const theirName = "Alice"; // Replace 'Alice' with the desired name

  const promptsAndSuggestions = [
    {
      prompt: `${theirName} is surprisingly bad at…`,
      suggestions: ["cooking", "dancing", "saying I'm sorry"],
    },
    {
      prompt: `${theirName}’s most eccentric hobby…`,
      suggestions: ["picking out outfits"],
    },
    {
      prompt: `If ${theirName} were an animal, they’d be…`,
      suggestions: ["koala", "snake"],
    },
    {
      prompt: `${theirName} tends to overwear…`,
      suggestions: ["denim", "flannel"],
    },
    {
      prompt: `Their sense of humor`,
      suggestions: ["absent", "dry", "cheesy"],
    },
    {
      prompt: `Dancing style in a few words…`,
      suggestions: ["erratic", "unhinged"],
    },
    {
      prompt: `Catchphrase or overused word`,
      suggestions: ["yesssss", "iconic!"],
    },
    {
      prompt: `${theirName} has way too many…`,
      suggestions: ["clothes", "phones", "coins"],
    },
    {
      prompt: `${theirName}'s most bizarre talent…`,
      suggestions: ["peeling an egg"],
    },
    {
      prompt: `Favorite way to spend a weekend…`,
      suggestions: ["in bed", "hiking"],
    },
    {
      prompt: `A food they'd eat forever…`,
      suggestions: ["burritos", "mac and cheese"],
    },
    {
      prompt: `A food they can't stand…`,
      suggestions: ["jello", "cilantro", "spicy food"],
    },
    {
      prompt: `I admire their ability to…`,
      suggestions: ["laugh at themselves", "get back up"],
    },
    {
      prompt: `One unique quirk is they…`,
      suggestions: ["chew with their mouth open"],
    },
    {
      prompt: `Favorite type of music or artist…`,
      suggestions: ["80s rock"],
    },
    {
      prompt: `The strangest thing ${theirName} is afraid of…`,
      suggestions: ["being alone", "ghosts", "robots"],
    },
    {
      prompt: `${theirName} is uniquely passionate about…`,
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
      suggestions: ["fall asleep on the couch"],
    },
    {
      prompt: `One annoying thing ${theirName} does is..`,
      suggestions: ["always late"],
    },
    {
      prompt: `${theirName} always starts but never finishes…`,
      suggestions: ["Projects", "recipes", "art"],
    },
    {
      prompt: `What trend or fad does ${theirName} not understand today…`,
      suggestions: ["the phrase 'ded'", "the internet"],
    },
    {
      prompt: `An obscure app/website they visit more than anyone else:`,
      suggestions: ["the delta app", "jezebel"],
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
      <main className="flex justify-center">
        <div className="container flex w-full max-w-screen-xl flex-col items-center justify-center px-4 py-16 md:w-full">
          <div className="grid items-start">
            <h2 className="mb-4 text-5xl font-bold tracking-tight text-black sm:text-[1.5rem]">
              Roast <span className="text-[hsl(280,100%,70%)]">Jonathan</span>{" "}
              with questions
            </h2>
            <h3>Answer as many as you like</h3>

            <div>
              <h1>Welcome to the Page</h1>
              <PromptSuggestions
                promptsAndSuggestions={promptsAndSuggestions}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
