import { cn } from "@/lib/utils";

export const MapIframe = () => (
  <div className={cn("flex flex-col text-white")}>
    <iframe
      src="https://yandex.ru/map-widget/v1/?ll=59.614681%2C42.473580&z=19"
      className={cn(
        "rounded-t-[12px] h-[640px]",
        "lg:rounded-t-4xl lg:h-[720px]",
      )}
    ></iframe>
    <div
      className={cn(
        "py-12 px-3 bg-[#4960F4] rounded-b-[12px] flex flex-col gap-6",
        "lg:rounded-b-4xl lg:pl-[356px] lg:pr-[946px] lg:flex-row lg:gap-[57px]",
      )}
    >
      <div
        className={cn(
          "text-[28px] leading-[35px] tracking-[-0.5px] font-semibold",
        )}
      >
        Адрес
      </div>
      <div className={cn("text-lg leading-[29px] tracking-[0%] flex flex-col")}>
        <div>г. Нукус</div>
        <div className="lg:w-[500px]">ул. М. Жуманазарова, дом 57</div>
        <div>+998 94 982 60 00</div>
      </div>
    </div>
  </div>
);
