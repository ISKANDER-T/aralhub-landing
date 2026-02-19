import { ChevronUp } from "lucide-react";
import {
  Approach,
  Footer,
  Header,
  Keys,
  MainBanner,
  MapIframe,
  Quotes,
  Services,
  Technologya,
  Trust,
  Workers,
  WorkProcess,
} from "./components";
import { cn } from "./lib/utils";

function App() {
  return (
    <>
      <div className="font-inter">
        <div id="header">
          <Header />
        </div>
        <div className={cn("px-1 py-2 flex flex-col gap-2", "md:p-6 md:gap-6")}>
          <div id="main">
            <MainBanner />
          </div>
          <div id="service">
            <Services />
          </div>
          <Trust />
          <div id="team">
            <Workers />
          </div>
          <Keys />
          <Quotes />
          <div id="work">
            <Approach />
          </div>
          <WorkProcess />
          <Technologya />
          <div id="map">
            <MapIframe />
          </div>
        </div>
        <div id="footer">
          <Footer />
        </div>
      </div>
      <div className="z-[99999] fixed bottom-10 right-10 cursor-pointer">
        <a href="#header">
          <div className="w-14 h-14 bg-[#4960F4] rounded-full flex justify-center items-center ">
            <ChevronUp size={50} className="text-white" />
          </div>
        </a>
      </div>
    </>
  );
}

export default App;
