import React, { useState } from "react";

interface Prompt {
  prompt: string;
  suggestions: string[];
}

interface PromptComponentProps {
  promptsAndSuggestions: Prompt[];
}

const PromptComponent = ({ promptsAndSuggestions }: PromptComponentProps) => {
  const [answers, setAnswers] = useState<string[]>(
    Array(promptsAndSuggestions.length).fill(""),
  );

  const handleSuggestionClick = (index: number, suggestion: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = suggestion;
    setAnswers(newAnswers);
  };

  return (
    <>
      <form className="border-1 xs:grid-cols-1 grid grid-cols-1 grid-cols-2 gap-10 rounded-lg md:grid-cols-3">
        {promptsAndSuggestions.map((item: Prompt, index: number) => (
          <div key={index} className="">
            <textarea
              className="w-full resize-none rounded-xl border p-4 text-sm 
hover:outline-none hover:ring-4 hover:ring-purple-400 hover:ring-opacity-75 
focus:outline-none focus:ring-4 focus:ring-purple-400 focus:ring-opacity-75"
              placeholder={item.prompt}
              value={answers[index]}
              onChange={(e) => {
                const newAnswers = [...answers];
                newAnswers[index] = e.target.value;
                setAnswers(newAnswers);
              }}
            />
            <div className="ml-4 mt-0 text-xs italic text-gray-400">
              {""}
              <span className="text-xs text-slate-400"> </span>
              {item.suggestions.map((suggestion, idx) => (
                <span
                  key={idx}
                  className="cursor-pointer hover:text-purple-700"
                  onClick={() => handleSuggestionClick(index, suggestion)}
                >
                  {suggestion}
                  {idx < item.suggestions.length - 1 ? ", " : ""}
                </span>
              ))}
            </div>
          </div>
        ))}
      </form>
    </>
  );
};

export default PromptComponent;
