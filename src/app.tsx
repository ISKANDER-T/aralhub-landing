import {
  Approach,
  Footer,
  Header,
  Keys,
  MainBanner,
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
        <MainBanner />
        <Services />
        <Trust />
        <Workers />
        <Keys />
        <Quotes />
        <Approach />
        <WorkProcess />
        <Technologya />
      </div>
      <Footer />
    </div>
  );
}

export default App;
