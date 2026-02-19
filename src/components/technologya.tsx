import { java, node, php, python, rails, sql } from "@/assets";
import { Card, Title } from "./ui";
import { useTranslation } from "@/lib/use-translation";

const technologyaData: { img: string }[] = [
  {
    img: sql,
  },
  {
    img: java,
  },
  {
    img: php,
  },
  {
    img: python,
  },
  {
    img: node,
  },
  {
    img: rails,
  },
];

export const Technologya = () => {
  const {t} = useTranslation()
  return (
    <Card variant="primary" className="gap-6 pb-52 lg:pt-20 lg:pb-32 lg:gap-16">
      {" "}
      <Title text={<>{t("Технологии которые мы используем")}</>} />
      <div className="grid grid-cols-2 gap-12 lg:flex lg:flex-row lg:gap-16 lg:items-center">
        {technologyaData.map((item) => (
          <div key={item.img}>
            <img src={item.img} className="w-[77px] h-77px" />
          </div>
        ))}
      </div>
    </Card>
  );
};
