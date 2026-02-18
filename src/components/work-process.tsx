import { cel, cel2, five, four, one, six, three, two } from "@/assets";
import { Card, Text, Title } from "./ui";
import { cn } from "@/lib/utils";

const workProcessData: { img: string; title: string; text: string }[] = [
  {
    img: one,
    title: "Планирование и анализ требований",
    text: "В AralHub требования анализируются через обсуждения и сбор идей, задачи и цели строятся по плану.",
  },
  {
    img: two,
    title: "Собираем правильную команду",
    text: "В AralHub команда формируется по навыкам и интересам, роли распределяются по сильным сторонам.",
  },
  {
    img: three,
    title: "Планирование спринта",
    text: "В AralHub спринт планируется по приоритетам задач и срокам.",
  },
  {
    img: four,
    title: "Проектирование архитектуры",
    text: "В AralHub архитектура проекта создается с учетом масштабируемости и надежности.",
  },
  {
    img: five,
    title: "Разработка и тестирование",
    text: "В AralHub разработка идет итеративно с регулярным тестированием и проверкой кода.",
  },
  {
    img: six,
    title: "Развертывание",
    text: "В AralHub развертывание проводится на облачных платформах с упором на стабильность и доступность.",
  },
];

export const WorkProcess = () => {
  return (
    <Card
      className="gap-6 pb-52 lg:pt-20 lg:pb-32 lg:gap-16"
      variant="secondary"
    >
      <img src={cel} className="absolute bottom-12 lg:hidden" />
      <img
        src={cel2}
        className="hidden lg:block lg:absolute lg:top-[50%] lg:right-10"
      />
      <Title
        variant="secondary"
        text={<>Как работает процесс разработки в AralHub</>}
      />
      <div
        className={cn(
          "flex flex-col gap-6",
          "lg:w-[1160px] lg:grid lg:grid-cols-3 lg:gap-x-5 lg:gap-y-24",
        )}
      >
        {workProcessData.map((item) => (
          <Card
            key={item.text}
            className={cn(
              "flex flex-row gap-6 p-5",
              "lg:relative lg:rounded-2xl",
            )}
          >
            <div className={cn("basis-15")}>
              <img
                src={item.img}
                width={48}
                className={cn("absolute top-6", "lg:relative lg:top-0")}
              />
            </div>
            <div className={cn("basis-75 flex flex-col gap-2")}>
              <Title
                text={item.title}
                className={cn(
                  "text-start text-[20px]",
                  "lg:text-2xl lg:text-[20px]",
                )}
              />
              <Text
                variant="secondary"
                text={item.text}
                className={cn(
                  "text-start text-[13px] leading-[18px]",
                  "lg:opacity-75",
                )}
              />
            </div>
          </Card>
        ))}
      </div>
    </Card>
  );
};
