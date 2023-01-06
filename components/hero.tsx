import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="flex items-center">
      <div className="basis-2/3 pr-4">
        <h3 className="font-sans text-3xl font-semibold">
          Hi 👋, I&apos;m Joe Ng&apos;ethe,
        </h3>
        <p className="py-3 font-sans text-lg text-[#2d3748]">
          I am a Software Engineer from Nairobi, Kenya 🇰🇪.
          <br /> I love React, GraphQL and anything Javascript. I learn by
          sharing my knowledge with the community through blog posts, workshops,
          and Open-source.
        </p>
        <button>Get to know more about me</button>
      </div>
      <div className="basis-1/3 text-right">
        <Image
          src="/images/joe-sketch.jpg"
          alt="Joe sketch"
          width={250}
          height={250}
          priority
          className="rounded-full shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
