import React, { useState } from "react";
import { generateText, moderateText } from '../openai.js';


const Cover = () => {
  const [inputText, setInputText] = useState("");
  const [generatedText, setGeneratedText] = useState("");
  const promptEssay = "some words";

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = async () => {
    const response = await generateText(promptEssay, inputText);
    setGeneratedText(response);
  };
  return (
    <div className="pb-80 pt-24 bg-zinc-900">
      <h1 className="text-5xl font-bold text-center text-teal-900 hover:text-teal-400 mb-8">
        CoverLetter Generator
      </h1>
      <p className="text-lg font-semibold text-center text-teal-500 hover:text-teal-300 mb-40">
        Follow these instructions to create your Perfect CoverLetter. <br></br><br></br> Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.Lorem ipsum dolor sit amet <br></br>
        consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <br></br> <br></br><br></br>
        Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.Lorem ipsum dolor sit amet <br></br>
        consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="w-1/2 mx-auto p-4">
        <input
          className="w-full h-32 bg-gray-100 border border-gray-400 rounded py-2 px-4"
          type="text"
          placeholder="Write your CoverLetter here..."
          value={inputText}
          onChange={handleInputChange}
        />
        <br></br><br></br>
        <button
          className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSubmit}
        >
          Submit
        </button>
        {generatedText && (
          <div className="mt-8 bg-gray-100 border border-gray-400 rounded py-4 px-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Generated Text:
            </h3>
            <p className="text-lg text-gray-700">{generatedText}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cover; 