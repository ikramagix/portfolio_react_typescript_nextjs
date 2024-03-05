"use client";

import React, { useState, useEffect } from 'react';

type PhraseWithColor = {
  phrase: string;
  gradient: string;
};

const phrasesWithColors: PhraseWithColor[] = [
  { phrase: "Είμαι Ικραμ Σααντι", gradient: "bg-gradient-to-r from-orange-500 to-red-500" },
  { phrase: "I am Ikram Saadi", gradient: "bg-gradient-to-r from-red-400 to-orange-500" },
  { phrase: "أنا إكرام سعدي", gradient: "bg-gradient-to-r from-red-400 to-yellow-500" },
  { phrase: "Je suis Ikrame Saadi", gradient: "bg-gradient-to-r from-orange-500 to-yellow-400" },
  { phrase: "Soy Ikram Saadi", gradient: "bg-gradient-to-r from-yellow-400 to-red-400" },
];
const Banner: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrasesWithColors.length);
    }, 1000); 
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-7xl font-semibold text-white animate-bounce">hello world 👋🏼</h1>
      <h2 className={`text-6xl font-semibold bg-clip-text text-transparent ${phrasesWithColors[index].gradient} transition-all duration-1000`}>
        {phrasesWithColors[index].phrase}
      </h2>
      <p className="mt-4 text-2xl font-medium text-gray-300">
      <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-400">this is a cluster of ideas also known as portfolio
      </span>
      </p>
      <p className="my-5 text-gray-200">
        Come get a sense of my balance between
        <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-500"> innovation, precision & creativity.</span>
      </p>
      <h3 className="text-7xl font-bold">🌞</h3>
      <button
        onClick={() => window.open("mailto:ikrame.saadi@gmail.com")}
        className="mx-auto mt-4 hover:bg-white rounded-3xl text-white font-semibold hover:text-black py-3 px-10 border border-white hover:border-transparent transition-colors duration-300"
      >
        Let&#39;s discuss your fantastic idea and make it come to reality!
      </button>
    </div>
  );
};

export default Banner;
