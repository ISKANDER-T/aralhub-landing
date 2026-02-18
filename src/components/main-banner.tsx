import { cn } from "@/lib/utils";
import { Card } from "./ui/card";
import { Text } from "./ui/text";
import { Button } from "./ui/button";
import { computer, computerLg, logoOpacity } from "@/assets";
import { Title } from "./ui";

export const MainBanner = () => {
  return (
    <Card
      className={cn(
        "bg-gradient-to-b from-[#4960F4] to-[#ABB6F7] py-32 gap-[87px]"
      )}
    >
      <img
        src={logoOpacity}
        className={cn(
          "absolute top-0 right-0 w-[257px] h-[372px]",
          "lg:w-[1018px] lg:h-[1474px]"
        )}
      />
      <div className={cn("flex flex-col justify-center items-center gap-6")}>
        <Title type="two" text="Сильная команда — сильный продукт" />
        <Text
          variant="primary"
          text="Мы помогаем создавать и управлять командой разработчиков мирового
          класса, чтобы воплотить вашу идею в реальность."
          className="lg:w-[676px]"
        />
        <Button className="mt-6">Давайте начнем!</Button>
      </div>
      <img src={computer} className="lg:hidden" />
      <img src={computerLg} className="hidden lg:block" />
    </Card>
  );
};
