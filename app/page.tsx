import { CurrenciesSection } from "./components/currencies-section/currencies-section";
import { Header } from "./components/header/header";
import { Hero } from "./components/hero/hero";
import { AccessSection } from "./components/access-section/access-section";
import { JoinSection } from "./components/join-section/join-section";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <CurrenciesSection />
      <AccessSection />
      <JoinSection />
    </div>
  );
}
