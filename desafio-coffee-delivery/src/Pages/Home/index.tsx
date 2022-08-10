import { CoffeeCard } from "./CoffeeCard";
import { Intro } from "./Intro";
import { CoffeesHeader } from "./styles";

export function Home() {
  return (
    <>
      <Intro />
      <div>
        <CoffeesHeader>Nossos Cafés</CoffeesHeader>
      </div>
      <CoffeeCard />
    </>
  );
}
