import { android, cash, figma, golf, web } from "@/assets";
import {
  Card,
  Title,
  Text,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui";
import { cn } from "@/lib/utils";

export type CardType = {
  img: string;
  title: string;
  text: string;
  imgLg?: string;
  special?: string;
}[];

const services: CardType = [
  {
    img: web,
    title: "Разработка веб‑сайтов",
    text: "Мы создаем удобные и эффективные сайты для вашего бизнеса, которые помогают достигать маркетинговых целей и оправдывать ожидания клиентов.",
  },
  {
    img: android,
    title: "Разработка мобильных приложений",
    text: "Мы создаем современные приложения для iOS и Android, которые помогают развивать ваш бизнес и достигать целей. Решения AralHub поддерживают достижение новых высот.",
  },
  {
    img: figma,
    title: "Дизайн интерфейсов",
    text: "Мы разрабатываем привлекательные и интуитивно понятные интерфейсы, обеспечивая лучший пользовательский опыт для ваших клиентов.",
  },
  {
    img: golf,
    title: "Консалтинг и разработка стратегии",
    text: "Мы анализируем ваши бизнес-потребности и предлагаем технологические решения и стратегии, которые помогут вашему продукту выделиться и добиться успеха на рынке.",
  },
  {
    img: cash,
    title: "Решения для электронной коммерции",
    text: "Мы предоставляем полный спектр услуг для создания и развития вашего интернет-магазина: интеграция платёжных систем, настройка платформ и многое другое.",
  },
];

const TitleService = ({ text }: { text: string }) => {
  return (
    <div
      className={cn(
        "font-semibold text-[20px] leading-6 tracking-[-0.5px] text-center",
        "lg:text-2xl lg:leading-7"
      )}
    >
      {text}
    </div>
  );
};
const TextService = ({ text }: { text: string }) => {
  return (
    <div className={cn("text-[13px] leading-[18px] tracking-[0%]")}>{text}</div>
  );
};

export const Services = () => {
  return (
    <Card variant="primary">
      <Title text="Услуги, которые мы предлагаем" />
      <Text
        text="В нашей команде AralHub работают опытные разработчики, которые профессионально подходят к каждому проекту. Их навыки и знания позволяют нам создавать качественные программные решения, соответствующие современным требованиям и ожиданиям клиентов."
        variant="secondary"
        className="lg:hidden"
      />
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full mt-9"
      >
        <CarouselContent>
          {services.map((item) => (
            <CarouselItem key={item.img} className="lg:basis-1/5">
              <Card className="p-5 gap-4 h-[350px]">
                <img src={item.img} className="mb-8" />
                <TitleService text={item.title} />
                <TextService text={item.text} />
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
