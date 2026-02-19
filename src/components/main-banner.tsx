import { cn } from "@/lib/utils";
import { Card } from "./ui/card";
import { Text } from "./ui/text";
import { Button } from "./ui/button";
import { computer, computerLg, logoOpacity } from "@/assets";
import { Title } from "./ui";
import { useTranslation } from "@/lib/use-translation";

export const MainBanner = () => {
  const {t} = useTranslation()
  return (
    <Card
      className={cn(
        "bg-gradient-to-b from-[#4960F4] to-[#ABB6F7] py-32 gap-[87px]",
      )}
    >
      <img
        src={logoOpacity}
        className={cn(
          "absolute top-0 right-0 w-[257px] h-[372px]",
          "lg:w-[1018px] lg:h-[1474px]",
        )}
      />
      <div className={cn("flex flex-col justify-center items-center gap-6")}>
        <Title type="two" text={t("Сильная команда — сильный продукт")} />
        <Text
          variant="primary"
          text={t("Мы помогаем создавать и управлять командой разработчиков мирового класса, чтобы воплотить вашу идею в реальность.")}
          className="lg:w-[676px]"
        />
        <a href="#map">
          <Button className="mt-6">{t("Давайте начнем!")}</Button>
        </a>
      </div>
      <img src={computer} className="lg:hidden" />
      <img src={computerLg} className="hidden lg:block" />
    </Card>
  );
};
