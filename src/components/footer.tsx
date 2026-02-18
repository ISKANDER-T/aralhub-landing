import { instagram, logoFull } from "@/assets";
import { cn } from "@/lib/utils";

export const Footer = () => {
  return (
    <div
      id="contact"
      className={cn(
        "px-4 py-12 bg-[#0B1B80] text-white",
        "lg:py-16 lg:px-[380px]",
      )}
    >
      <div className={cn("flex flex-col gap-12", "lg:flex-row")}>
        <div>
          <img src={logoFull} className={cn("w-[156px] mb-6")} />
          <div className={cn("flex flex-col gap-2  opacity-70")}>
            <div
              className={cn(
                "text-[16px] leading-[22px] tracking-[0%]",
                "lg:w-[200px]",
              )}
            >
              ARAL HUB
            </div>
            <div className={cn("flex flex-row gap-2 ")}>
              <a href="https://www.instagram.com/aralhub.uz">
                <img src={instagram} className={cn("lg:w-6")} />{" "}
              </a>
            </div>
          </div>
        </div>
        <div className={cn("lg:ml-[292px] lg:mr-5 lg:w-[275px]")}>
          <div className={cn("text-[20px] leading-7 tracking-[0%] mb-6")}>
            Разделы
          </div>
          <div
            className={cn(
              "flex flex-col gap-2 opacity-70 leading-[22px] text-[16px] tracking-[0%]",
            )}
          >
            <div>
              <a href="#main">О нас</a>
            </div>
            <div>
              <a href="#service">Услуги</a>
            </div>
            <div>
              <a href="#work"></a>Как это работает
            </div>
          </div>
        </div>
        <div className={cn("lg:w-[373px]")}>
          <div className={cn("text-[20px] leading-7 tracking-[0%] mb-6")}>
            Свяжитесь с нами
          </div>
          <div
            className={cn(
              "opacity-70 leading-[22px] text-[16px] tracking-[0%]",
            )}
          >
            <div>+998 94 982 60 00</div>
          </div>
        </div>
      </div>
    </div>
  );
};
