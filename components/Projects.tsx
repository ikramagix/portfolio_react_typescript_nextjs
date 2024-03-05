import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects: React.FC<{}> = () => {
  return (
    <section id="projects">
      <h1 className="text-white font-semibold text-center text-6xl pt-[35px]">
        What have I created so far ?
      </h1>
      <h2 className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-400 text-center text-6xl pt-[35px]">
        “A step towards what you fear is a mile towards mastering it”{" "}
      </h2>
      <div className=" container mx-auto 2xl  ">
        <div className="flex-col flex md:flex-row  mt-7">
          <Link
            href="allochiner.netlify.app/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <div className="p-3">
                <p className="text-white font-semibold text-xl">
                  Allô... 🔎 Chiné ?
                </p>
                <p className="text-gray-500 text-[10px]">
                  Aren&#39;t you fed up with the Netflix recommendations that keep
                  l♾️ping through the same shows you&#39;ve already watched 100
                  times ?
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
                  LA REΣTAVERNE
                </p>
                <p className="text-gray-500 text-[10px]">
                  A minimalist dynamic website for a Cypriot traditional
                  restaurant.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex-col flex md:flex-row ">
          <Link
            href="https://locavelik-115195375a5a.herokuapp.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <div className=" p-3 ">
                <p className="text-white font-semibold text-xl">
                  Locavelow : A bike rental marketplace
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
            href="https://etchebeast.netlify.app/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <div className="p-3 ">
                <p className="text-white font-semibold text-xl">ETCHEBEAST</p>
                <p className="text-gray-500 text-[10px]">
                  ETCHEBEAST ©, in a decidedly tongue-in-cheek manner, is the
                  universe&#39;s foremost purveyor of Red Velvet cakes that&#39;s
                  reportedly the darling of New England&#39;s aristocracy.
                  Terrestrials, I&#39;m afraid, are rather out of luck, as this
                  celestial confectionery caters exclusively to an
                  extraterrestrial clientele. One is invited to merrily wonder
                  what this piece of cake tastes like, does it audaciously marry
                  the charm of traditional American bake-offs with a soon-to-be
                  hidden quest for the recipe ? A veritable giant leap for
                  programming-kind, indeed.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Image
            src="/allochiner_logo.png"
            height={150}
            width={150}
            alt="Allo Chiner"
          />
          <Image
            src="/halloumi-roman-odintsov-sin-bg.png"
            height={150}
            width={150}
            alt="La Restaverne Restaurant"
          />
          <Image
            src="/locavelow.png"
            height={150}
            width={150}
            alt="Locavelow"
          />
          <Image
            src="/round-beast-logo.png"
            height={150}
            width={150}
            alt="ETCHEBEAST"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
