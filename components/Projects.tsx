import Link from "next/link";
import React from "react";

const Projects: React.FC<{}> = () => {
  return (
    <section id="projects">
      <h1 className="text-white font-semibold text-center text-6xl pt-[35px]">
        What have I created so far ?
      </h1>
      <div className=" container mx-auto 2xl  ">
        <div className="flex-col flex md:flex-row ">
          <Link
            href="https://www.locavelow.fr/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <div className=" p-3 ">
              <p className="text-white font-semibold text-xl">
                🚴🏻‍♀️ Locavelow : A bike rental marketplace
                </p>
                <p className="text-gray-500 text-[10px]">
                  Locavelow is a French bike rental platform for private
                  individuals. The aim is to facilitate connections between
                  anyone that owns a bike and potential cyclists (casual, urban,
                  & rural), while promoting sustainable mobility.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://inspagram.netlify.app/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <div className="p-3 ">
              <p className="text-white font-semibold text-xl">
                📷 Inspagram: Unsplash API Random Image Generator with Javascript
                  & React
                </p>
                <p className="text-gray-500 text-[10px]">
                  Inspagram is a simple web application that mimics the style of
                  Instagram by displaying random images from the Unsplash API.
                  This project was created to explore integrating the Unsplash
                  API with JavaScript and React.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://allochiner.netlify.app/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <div className="p-3">
              <p className="text-white font-semibold text-xl">
                🎥 Allô... Chiné ?
                </p>
                <p className="text-gray-500 text-[10px]">
                  Everyone deserves a more personalized, varied, and exciting
                  viewing experience, and Allochiné is designed to break the
                  monotony and introduce you to a world of content you&#39;ll
                  love but might never have discovered otherwise. 
                  Because why settle for watching the same shows/movies on a loop when there&#39;s a vast world of untapped entertainment waiting for you ?
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://la-restaverne.netlify.app/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <div className="p-3">
              <p className="text-white font-semibold text-xl">
                🍽️ LA REΣTAVERNE
                </p>
                <p className="text-gray-500 text-[10px]">
                  A minimalist dynamic website for a Cypriot traditional
                  restaurant.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <h3 className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-400 text-center text-6xl pt-[25px]">
        “A step towards what you fear is a mile towards mastering it”{" "}
      </h3>
    </section>
  );
};

export default Projects;
