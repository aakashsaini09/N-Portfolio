"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa";
import { useState } from "react";

export const HoverEffect = ({items,className,}: {
  items: {title: string;description: string;link: string; img: string}[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <div
      className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-[#131425] py-44",className)}>
      {items.map((item, idx) => (
        <Link href={item?.link} key={item?.link} className="relative group flex flex-wrap p-2 h-full w-full"onMouseEnter={() => setHoveredIndex(idx)}onMouseLeave={() => setHoveredIndex(null)}>
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span className="absolute inset-0 h-full w-full bg-gray-700 dark:bg-slate-800/[0.8] block shadow-md shadow-gray-800 rounded-3xl" layoutId="hoverBackground" initial={{ opacity: 0 }}
                animate={{opacity: 1, transition: { duration: 0.15 },}} exit={{opacity: 0,transition: { duration: 0.15, delay: 0.2 }, }}/>
            )}
          </AnimatePresence>
          <Card>
            <div className="img w-full h-60 overflow-hidden">
              <Image
                    src={item?.img}
                    alt={item?.img}
                    className={"object-cover object-center w-full h-full"}
                    width={0}
                    height={0}
                    loading="lazy"
                    sizes="100vw"
                  />
            </div>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};




export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-[55vh] w-full p-0 overflow-hidden bg-[#0d0d19] border border-gray-700 dark:border-white/[0.2] group-hover:border-slate-700 relative z-10",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-0">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
      <div className="text-zinc-100 font-bold tracking-wide mt-8  text-xl mx-auto flex ml-8 font-sans">
        {children} <div className="ml-2 text-white font-bold text-xl flex items-center"><FaLocationArrow/></div>
      </div>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: HTMLImageElement;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-4 text-zinc-400 tracking-wide leading-relaxed px-5 text-base pb-2",
        className
      )}
    >
      {children}
    </p>
  );
};
