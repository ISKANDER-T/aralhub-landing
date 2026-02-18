import { cn } from "@/lib/utils";
import type { FC, ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "default";
};

export const Card: FC<CardProps> = ({
  children,
  className,
  variant = "default",
}) => {
  return (
    <div
      className={cn(
        "rounded-[12px] px-3 py-12 relative flex flex-col justify-center items-center gap-3",
        "lg:rounded-4xl",
        {
          primary: "bg-[#F2F3FA]",
          secondary: "bg-[#4960F4]",
          default: "bg-white",
        }[variant],
        className
      )}
    >
      {children}
    </div>
  );
};
