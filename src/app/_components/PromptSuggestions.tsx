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
    <div className="space-y-4">
      {promptsAndSuggestions.map((item: Prompt, index: number) => (
        <div key={index} className="space-y-0">
          <textarea
            className="w-full rounded-xl border border-gray-300 p-2"
            placeholder={item.prompt}
            value={answers[index]}
            onChange={(e) => {
              const newAnswers = [...answers];
              newAnswers[index] = e.target.value;
              setAnswers(newAnswers);
            }}
          />
          <div className="text-xs text-blue-300">
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
    </div>
  );
};

export default PromptComponent;
