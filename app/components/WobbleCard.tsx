"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";

export default function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px] bg-purple-800"
        className="">
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            My Tech Stack
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            Next-JS, Typescript, MERN, Prisma, Tailwind CSS, Chakra UI
          </p>
        </div>
        <Image
          src="/b1.jpg"
          width={500}
          height={500}
          alt="linear demo image" className="absolute -right-4 lg:-right-[10%] -bottom-10 object-contain rounded-2xl"/>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white font-sans">
        Working hard to be a Lead
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
        Working on both CST and IST timezones
        </p>
      </WobbleCard>

      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-500 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
            <span className="font-light text-sm text-gray-800">Behind the Scene</span>
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Currently learning WEB 3.0 technologies
          </h2>
            {/* <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                With over 100,000 mothly active bot users, Gippity AI is the most
                popular AI platform for developers.
            </p> */}
        </div>
        <Image
          src="/b5.webp"
          width={400}
          height={400}
          alt="linear demo image"
          className="absolute -right-5% md:-right-[20%] lg:-right-[1%] -bottom-16 object-contain rounded-2xl"
        />
      </WobbleCard>
      
    </div>
  );
}
