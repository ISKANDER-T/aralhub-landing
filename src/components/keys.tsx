import { cn } from "@/lib/utils";
import { Card, Title, Text } from "./ui";
import type { CardType } from "./services";
import { code, codeLg, monitor, monitorLg, pen, penLg } from "@/assets";
import { useTranslation } from "@/lib/use-translation";

export const Keys = () => {
  const {t} = useTranslation()
const keys: CardType = [
  {
    img: pen,
    imgLg: penLg,
    text: t("Дизайн веб-сайта"),
    title:
      t("AralHub основан на видении и четкой цели предоставлять выдающиеся услуги в области веб-разработки и цифрового маркетинга. Обязавшись предоставлять лучшие решения своим клиентам, AralHub зарекомендовал себя как надежный партнер в цифровом пространстве."),
  },
  {
    img: code,
    imgLg: codeLg,
    text: t("Веб-разработка"),
    title:
      t("AralHub предоставляет услуги веб‑разработки высшего класса с акцентом на производительность, пользовательский опыт и новейшие технологии. От адаптивного дизайна до сложных серверных решений, мы гарантируем, что каждый проект будет настроен с учетом специфических потребностей наших клиентов."),
  },
  {
    img: monitor,
    imgLg: monitorLg,
    text: t("Цифровые маркетинговые решения"),
    title:
      t("В AralHub мы специализируемся на предоставлении комплексных цифровых маркетинговых услуг, которые способствуют росту и повышению онлайн‑видимости. От SEO и маркетинга в социальных сетях до платной рекламы и создания контента, наша команда использует стратегии, основанные на данных, чтобы гарантировать, что ваш бренд достигнет своего полного потенциала."),
  },
];

  return (
    <Card
      variant="secondary"
      className={cn("gap-6", "lg:gap-16 lg:pt-20 lg:pb-32")}
    >
      <Title
        text={t("Наши последние кейс-исследования")}
        variant="secondary"
        className="lg:w-[400px]"
      />
      <div className={cn("flex flex-col gap-8")}>
        {keys.map((item) => {
          return (
            <Card
              key={item.text}
              className={cn(
                "p-0",
                "lg:w-[1160px] lg:flex-row lg:justify-between lg:items-start lg:gap-10 lg:rounded-l-2xl",
              )}
            >
              <img src={item.img} className="lg:hidden rounded-t-[12px]" />
              <div
                className={cn(
                  "flex flex-col gap-2 px-4 pb-4",
                  "lg:pt-[30px] lg:pl-[30px] lg:gap-4",
                )}
              >
                <Title text={item.text} type="three" />
                <Text
                  text={item.title}
                  variant="secondary"
                  className="text-start lg:opacity-70"
                />
              </div>
              <img
                src={item.imgLg}
                className="hidden lg:block lg:w-[570px] lg:h-[352px]"
              />
            </Card>
          );
        })}
      </div>
    </Card>
  );
};
