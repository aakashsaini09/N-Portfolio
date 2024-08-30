import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export default function ScrollBasedVelocityDemo() {
  return (
    <VelocityScroll
      text="Next-JS Tailwind CSS"
      default_velocity={1}
      className="font-display text-center text-xl py-4 font-bold tracking-[-0.07em] text-[#47484f] drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
      />
  );
}
