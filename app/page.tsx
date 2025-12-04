import { CurrenciesSection } from "./components/currencies-section/currencies-section";
import { Header } from "./components/header/header";
import { Hero } from "./components/hero/hero";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <CurrenciesSection />
    </div>
  );
}
