import { agile, codeIcon, idea, ocenka, success, uxCard } from "@/assets";
import { Card, Text, Title } from "./ui";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/lib/use-translation";



export const Approach = () => {
  const {t} = useTranslation()
  const approachData: { img: string; title: string; text: string }[] = [
  {
    img: uxCard,
    title: "UX Driven Engineering",
    text: t("В AralHub мы ставим опыт пользователя на первое место на каждом этапе проектирования и разработки, чтобы создавать интуитивно понятные и удобные решения."),
  },
  {
    img: ocenka,
    title: "Proven Experience and Expertise",
    text: t("В AralHub мы обладаем богатым проверенным опытом и экспертизой, чтобы предоставлять исключительные решения, соответствующие потребностям наших клиентов."),
  },
  {
    img: codeIcon,
    title: "Code Reviews",
    text: t("В AralHub мы придаем большое значение тщательным проверкам кода, чтобы гарантировать высокие стандарты качества, безопасности и производительности во всех наших проектах."),
  },
  {
    img: agile,
    title: "Agile Development",
    text: t("В AralHub мы придерживаемся гибкого процесса разработки, который обеспечивает гибкость, быстрые итерации и возможность адаптироваться к меняющимся требованиям на протяжении всего жизненного цикла проекта."),
  },
  {
    img: idea,
    title: "Scalable Solutions",
    text: t("В AralHub мы разрабатываем масштабируемые решения, которые растут вместе с вашим бизнесом, обеспечивая долгосрочный успех и возможность расширения по мере изменения ваших потребностей."),
  },
  {
    img: success,
    title: "Quality Assurance",
    text: t("В AralHub мы внедряем надежные процессы обеспечения качества, чтобы гарантировать, что каждый продукт, который мы поставляем, соответствует самым высоким стандартам производительности и надежности."),
  },
];

  return (
    <Card className="gap-6 lg:pt-20 lg:pb-32 lg:gap-16" variant="primary">
      <Title text={<>{t("Наш подход к проектированию и разработке")}</>} />
      <div
        className={cn(
          "flex flex-col gap-3",
          "lg:w-[1160px] lg:grid lg:grid-cols-2 lg:gap-5",
        )}
      >
        {approachData.map((item) => (
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
