import React, { useState } from "react";

interface PromptComponentProps {
  promptsAndSuggestions: {
    prompt: string;
    suggestions: string[];
  }[];
}

const PromptComponent = ({ promptsAndSuggestions }: PromptComponentProps) => {
  const [answers, setAnswers] = useState(
    Array(promptsAndSuggestions.length).fill(""),
  );

  const handleSuggestionClick = (index, suggestion) => {
    let newAnswers = [...answers];
    newAnswers[index] = suggestion;
    setAnswers(newAnswers);
  };

  return (
    <div className="space-y-4">
      {promptsAndSuggestions.map((item, index) => (
        <div key={index} className="space-y-2">
          <textarea
            className="w-full rounded border border-gray-300 p-2"
            placeholder={item.prompt}
            value={answers[index]}
            onChange={(e) => {
              let newAnswers = [...answers];
              newAnswers[index] = e.target.value;
              setAnswers(newAnswers);
            }}
          />
          <div className="text-xs text-gray-500">
            {item.suggestions.map((suggestion, idx) => (
              <span
                key={idx}
                className="mr-2 cursor-pointer hover:text-gray-700"
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
