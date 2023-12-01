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
      <form className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {promptsAndSuggestions.map((item: Prompt, index: number) => (
          <div key={index} className="">
            <textarea
              className="w-full resize-none rounded-xl border border-slate-300 p-4 text-sm"
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
                  className="cursor-pointer hover:text-blue-700"
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
