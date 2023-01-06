import Image from "next/image";
import React from "react";
import Sketch from "public/images/joe-sketch.jpg";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 items-center md:grid-cols-4">
      <div className="order-2 col-span-3 pt-4 pr-4 md:pt-0">
        <h3 className="font-sans text-3xl font-semibold">
          Hi 👋, I&apos;m Joe Ng&apos;ethe,
        </h3>
        <p className="py-3 font-sans text-lg text-[#2d3748]">
          I am a Software Engineer from Nairobi, Kenya 🇰🇪.
          <br /> I love React, GraphQL and anything Javascript. I learn by
          sharing my knowledge with the community through blog posts, workshops,
          and Open-source.
        </p>
      </div>
      <div className="order-1 col-span-1 grid justify-center md:order-2 md:justify-end">
        <div className="relative h-[200px]  w-[200px] md:h-[180px] md:w-[180px] lg:h-[250px] lg:w-[250px] xl:h-[280px] xl:w-[280px] ">
          <Image
            src={Sketch}
            alt="Joe sketch"
            fill
            priority
            placeholder="blur"
            className="mx-0 inline-block self-center rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
