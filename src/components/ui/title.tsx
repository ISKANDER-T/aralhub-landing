import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export const Title = ({
  text,
  variant = "primary",
  type = "one",
  className,
}: {
  text: ReactNode;
  variant?: "primary" | "secondary";
  type?: "one" | "two" | "three";
  className?: string;
}) => {
  return {
    one: (
      <div
        className={cn(
          "font-semibold text-2xl leading-8 tracking-[0%] text-center align-middle",
          "lg:font-bold lg:text-[38px] lg:leading-[125%] lg:tracking-[0%]",
          { primary: "text-black", secondary: "text-white" }[variant],
          className
        )}
      >
        {text}
      </div>
    ),
    two: (
      <div
        className={cn(
          "text-[32px] leading-8 tracking-[0%] font-semibold text-white text-center",
          "lg:text-[56px] leading-[110%] tracking-[-1px]",
          className
        )}
      >
        {text}
      </div>
    ),
    three: (
      <div
        className={cn(
          "text-[20px] font-semibold leading-7 tracking-[0%] align-middle",
          "lg:text-[28px]",
          className
        )}
      >
        {text}
      </div>
    ),
  }[type];
};
