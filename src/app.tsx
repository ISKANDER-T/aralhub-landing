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
    <div className="font-inter">
      <Header />
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
        <MapIframe />
      </div>
      <Footer />
    </div>
  );
}

export default App;
