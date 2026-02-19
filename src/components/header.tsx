import { logoFull, menuIcon } from "@/assets";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { LangSelect } from "./ui";
import { useTranslation } from "@/lib/use-translation";

const Menu = ({ className }: { className?: string }) => {
  const { t } = useTranslation();

  const menu: { title: string; href: string }[] = [
    { href: "#main", title: t("О нас") },
    {
      href: "#service",
      title: t("Услуги"),
    },
    {
      href: "#team",
      title: t("Наша команда"),
    },
    {
      href: "#work",
      title: t("Как это работает"),
    },
  ];

  const [activeLink, setActiveLink] = useState<string>(menu[0].title);
  return (
    <div
      className={cn(
        "text-[16px] leading-6 font-inter",
        "lg:flex lg:flex-row lg:gap-16 text-white",
        className,
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
  const { t } = useTranslation();
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
        <a href="#map">
          <Button variant="secondary">{t("Свяжитесь с нами")}</Button>
        </a>
      </SheetContent>
    </Sheet>
  );
};

export const Header = () => {
  const { t } = useTranslation();
  return (
    <div className={"bg-[#0B1B80] p-6 flex justify-between items-center"}>
      <div>
        <img src={logoFull} />
      </div>
      <Menu className="hidden" />
      <div className="flex items-center gap-5">
        <LangSelect />
        <a href="#map">
          {" "}
          <Button className={cn("hidden", "lg:block")} variant="secondary">
            {t("Свяжитесь с нами")}
          </Button>
        </a>
      </div>
      <SheetMenu />
    </div>
  );
};
