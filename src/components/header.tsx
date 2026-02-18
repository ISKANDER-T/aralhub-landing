import { logoFull, menuIcon } from "@/assets";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const menu: { title: string; href: string }[] = [
  { href: "#main", title: "О нас" },
  {
    href: "#service",
    title: "Услуги",
  },
  {
    href: "#team",
    title: "Наша команда",
  },
  {
    href: "#work",
    title: "Как это работает",
  },
];

const Menu = ({ className }: { className?: string }) => {
  const [activeLink, setActiveLink] = useState<string>(menu[0].title);
  return (
    <div
      className={cn(
        "text-[16px] leading-6 font-inter",
        "lg:flex lg:flex-row lg:gap-16 text-white",
        className
      )}
    >
      {menu.map((item) => (
        <div
          key={item.href}
          onClick={() => setActiveLink(item.title)}
          className={
            activeLink === item.title
              ? "font-semibold "
              : "font-medium opacity-50"
          }
        >
          <a href={item.href}>{item.title}</a>
        </div>
      ))}
    </div>
  );
};

const SheetMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className="lg:hidden">
        <img src={menuIcon} />
      </SheetTrigger>
      <SheetContent
        side="top"
        className={cn("bg-[#0B1B80] flex justify-center items-center gap-16")}
      >
        <img src={logoFull} />
        <Menu className="flex flex-col justify-center items-center gap-6" />
        <Button variant="secondary">Свяжитесь с нами</Button>
      </SheetContent>
    </Sheet>
  );
};

export const Header = () => {
  return (
    <div className={"bg-[#0B1B80] p-6 flex justify-between items-center"}>
      <div>
        <img src={logoFull} />
      </div>
      <Menu className="hidden" />
      <Button className={cn("hidden", "lg:block")} variant="secondary">
        Свяжитесь с нами
      </Button>
      <SheetMenu />
    </div>
  );
};
