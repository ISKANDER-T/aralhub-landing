import { cn } from "@/lib/utils";
import type { FC, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
};

export const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
  className,
  disabled,
  onClick,
}) => {
  return (
    <button
      className={cn(
        "bg-white rounded-[12px] px-8 py-[15px] gap-2.5 leading-5 tracking-[0%] font-bold",
        className,
        {
          primary:
            "text-[#4960F4] shadow-white shadow-[0_4px_15px_0_rgba(255,255,255,0.25)]",
          secondary: "text-[#0B1B80]",
        }[variant]
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
