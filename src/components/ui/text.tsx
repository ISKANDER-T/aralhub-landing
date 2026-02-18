import { cn } from "@/lib/utils";

export const Text = ({
  variant = "primary",
  text,
  className,
}: {
  variant?: "primary" | "secondary";
  text: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "text-[15px] leading-5 tracking-[0%] text-center opacity-70",
        "lg:text-[18px] lg:leading-[29px] lg:opacity-100",
        {
          primary: "text-white",
          secondary: "text-black",
        }[variant],
        className
      )}
    >
      {text}
    </div>
  );
};
