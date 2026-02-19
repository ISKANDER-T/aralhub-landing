import { cn } from "@/lib/utils";
import { Card, Text, Title } from "./ui";
import { code } from "@/assets";
import { useTranslation } from "@/lib/use-translation";

export const Trust = () => {
  const {t} = useTranslation()
  return (
    <Card variant="secondary" className="lg:py-40 lg:px-[356px]">
      <div className="lg:w-[1160px] lg:flex lg:flex-row lg:gap-10">
        <div
          className={cn(
            "flex flex-col justify-center items-center gap-3",
            "lg:w-[550px] lg:gap-6",
          )}
        >
          <Title
            className="lg:text-start"
            variant="secondary"
            text={t("Нам доверяют разработку программного обеспечения")}
          />
          <Text
            className="lg:text-start"
            text={t("Мы увеличиваем возможности разработки для технических команд. Наша ценность не ограничивается только созданием команд, она равномерно распределена на протяжении всего жизненного цикла проекта.")}
          />
        </div>

        <div className="mt-9 lg:w-[570px]">
          <img src={code} className="w-full rounded-2xl" />
        </div>
      </div>
    </Card>
  );
};
