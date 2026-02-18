import { Alimjan, Babur, Timurbek, quote } from "@/assets";
import type { CardType } from "./services";
import { Card, Text, Title } from "./ui";
import { cn } from "@/lib/utils";

const quotes: CardType = [
  {
    img: Timurbek,
    title: "Тимурбек Балтабеков",
    special: "Основатель AralHub",
    text: "Найти идеальные таланты жизненно важно для роста бизнеса. Мы помогаем вам привлекать профессионалов, которые соответствуют вашим целям и требованиям, гарантируя долгосрочный успех. Благодаря их проактивному подходу мы эффективно расширили нашу деятельность, сохранив бюджет.",
  },
  {
    img: Babur,
    title: "Бабур Парахатов",
    special: "Backend разработчик",
    text: "Найти подходящую команду нелегко. Мы упрощаем этот процесс, предоставляя первоклассных специалистов, которые эффективно работают в вашем рабочем процессе и обеспечивают результаты в рамках бюджета. Благодаря их опыту мы смогли сократить расходы и улучшить сроки выполнения.",
  },
  {
    img: Alimjan,
    title: "Алимжан Имниаминов",
    special: "Backend разработчик",
    text: "Сотрудничайте с профессионалами, которые привносят инновации и поднимают ваши проекты на новый уровень. Наши индивидуальные решения обеспечивают качество и долгосрочное сотрудничество для вашего растущего бизнеса. Их команда быстро адаптировалась к нашим требованиям и привнесла свежие идеи в наш продукт.",
  },
];

export const Quotes = () => {
  return (
    <Card className="gap-6 lg:pt-20 lg:pb-32 lg:gap-32" variant="primary">
      <Title
        text={
          <>
            Способ создания <br className="hidden lg:block" /> отличного
            программного обеспечения
          </>
        }
      />
      <div className="flex flex-col gap-16 lg:gap-24">
        {quotes.map((item, index) => {
          return (
            <div className="flex flex-col gap-4 lg:w-[1160px]">
              <div className="flex lg:justify-between items-center gap-3 lg:gap-[108px]">
                <img
                  src={item.img}
                  className={`w-[81px] h-[81px] lg:w-[275px] lg:h-[275px] ${
                    index === 1 && "lg:hidden"
                  }`}
                />
                <div className="lg:flex lg:flex-col lg:gap-6 lg:w-[669px]">
                  <Text
                    text={item.title}
                    variant="secondary"
                    className="opacity-100 lg:opacity-100 text-start font-semibold lg:hidden"
                  />
                  <Text
                    text={item.special!}
                    variant="secondary"
                    className="opacity-50 lg:opacity-50 text-start lg:hidden"
                  />
                  <div
                    className={cn(
                      "hidden lg:flex lg:justify-start lg:items-start lg:gap-6",
                      `${index === 1 ? "pl-[99px]" : "pr-[99px]"}`
                    )}
                  >
                    <img src={quote} />
                    <Text
                      text={item.text}
                      variant="secondary"
                      className=" text-start"
                    />
                  </div>
                  <div
                    className={`hidden lg:block ${
                      index === 1 ? "pl-[99px]" : "pr-[99px]"
                    }`}
                  >
                    <Text
                      text={item.title}
                      variant="secondary"
                      className="opacity-100 lg:opacity-100 text-start font-semibold lg:pl-[60px]"
                    />
                    <Text
                      text={item.special!}
                      variant="secondary"
                      className="opacity-50 lg:opacity-50 text-start lg:pl-[60px]"
                    />
                  </div>
                </div>
                <img
                  src={item.img}
                  className={`hidden lg:w-[275px] lg:h-[275px] ${
                    index === 1 && "lg:block"
                  }`}
                />
              </div>
              <div className="flex justify-start items-start gap-4 pl-[42px] lg:hidden">
                <img src={quote} />
                <Text
                  text={item.text}
                  variant="secondary"
                  className=" text-start"
                />
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};
