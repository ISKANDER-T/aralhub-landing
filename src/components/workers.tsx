import { cn } from "@/lib/utils";
import {
  Card,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Text,
  Title,
} from "./ui";
import { Alimjan, Bektemir, Darmanbek, Me, Timur, Timurbek } from "@/assets";

const workers: { img: string; name: string; special: string }[] = [
  { img: Timurbek, name: "Тимурбек Балтабеков", special: "Основатель AralHub" },
  { img: Darmanbek, name: "Дарманбек Пахратдинов", special: "Frontend" },
  { img: Me, name: "Искандер Турабаев", special: "Frontend" },
  {
    img: Alimjan,
    name: "Алимжан Имниаминов",
    special: "Backend/Кибербезопасность",
  },
  { img: Bektemir, name: "Бектемир Изтелеуов", special: "Backend" },
  { img: Timur, name: "Тимур Данияров", special: "UX/UI дизайнер" },
];

const TitleWorker = ({ text }: { text: string }) => {
  return (
    <div
      className={cn(
        "font-semibold text-2xl leading-[125%] tracking-[-0.5px] text-center align-middle",
        "lg:text-[32px]",
      )}
    >
      {text}
    </div>
  );
};

export const Workers = () => {
  return (
    <Card variant="primary" className="lg:py-20 lg:gap-6">
      <Title text="Наша команда" />{" "}
      <Text
        variant="secondary"
        text="В нашей команде AralHub работают опытные разработчики, которые профессионально подходят к каждому проекту. Их навыки и знания позволяют нам создавать качественные программные решения, соответствующие современным требованиям и ожиданиям клиентов."
      />
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full mt-9 lg:mt-16"
      >
        <CarouselContent>
          {workers.map((item) => (
            <CarouselItem
              key={item.img}
              className="basis-[75%] lg:basis-[26.5%]"
            >
              <Card className="gap-2 py-9 w-[230px] h-[398px] lg:w-[374px] lg:h-[462px]">
                <img src={item.img} className="mb-2" />
                <TitleWorker text={item.name} />
                <Text
                  text={item.special}
                  className="opacity-60"
                  variant="secondary"
                />
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center items-center gap-6 mt-12">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </Card>
  );
};
