"use client";

import React, { useState, useEffect } from 'react';
import Image from "next/image";

type PhraseWithColor = {
  phrase: string;
  gradient: string;
};

const phrasesWithColors: PhraseWithColor[] = [
  { phrase: "Είμαι Ικραμ Σααντι", gradient: "bg-gradient-to-r from-cyan-500 to-purple-600" },
  { phrase: "I am Ikram Saadi", gradient: "bg-gradient-to-r from-purple-600 to-teal-600" },
  { phrase: "나는 이크람 사디이다", gradient: "bg-gradient-to-r from-cyan-600 to-purple-800" },
  { phrase: "Je suis Ikrame Saadi", gradient: "bg-gradient-to-r from-purple-600 to-teal-600" },
  { phrase: "私はイクラム・サーディです", gradient: "bg-gradient-to-r from-purple-600 to-teal-600" },
  { phrase: "Soy Ikram Saadi", gradient: "bg-gradient-to-r from-cyan-600 to-purple-800" },
  { phrase: "أنا إكرام سعدي", gradient: "bg-gradient-to-r from-cyan-500 to-purple-600" },
  { phrase: "Ich bin Ikram Saadi", gradient: "bg-gradient-to-r from-teal-600 to-purple-600" },
  { phrase: "Я Икрам Саади", gradient: "bg-gradient-to-r from-cyan-600 to-purple-800" }
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
            <div className="flex flex-col  justify-center  text-center">
        <div className="justify-center flex animate-spinSlow">
        <Image
            src="/ps2_me.png"
            height={250}
            width={250}
            alt="Ikrame Saadi Avatar PlayStation 2 Disc"
            priority
          />
        </div>
      </div>
      <h1 className="text-7xl font-semibold text-white">hello world 👋🏼</h1>
      <h2 className={`text-6xl font-semibold bg-clip-text text-transparent ${phrasesWithColors[index].gradient} transition-all duration-1000`}>
        {phrasesWithColors[index].phrase}
      </h2>
      <p className="mt-4 text-2xl font-medium text-gray-300">
      <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-cyan-500">
        and this is my portfolio
      </span>
      </p>
      <p className="my-5 text-gray-200">
        Come get a sense of my balance between
        <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-purple-600"> precision, innovation & creativity.</span>
      </p>
      <button
        onClick={() => window.open("mailto:ikrame.saadi@gmail.com")}
        className=" z-[1]     padding-20  hover:bg-white rounded-3xl  text-white font-semibold hover:text-black py-3 px-10  border-[0.1px] border-white hover:border-transparent "
        >
        Let&#39;s discuss your fantastic idea and make it come to reality!
      </button>
    </div>
  );
};

export default Banner;

