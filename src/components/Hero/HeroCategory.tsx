import { Hero } from "../../model/heroes";
import { Flex, Heading } from "@chakra-ui/react";
import HeroList from "./HeroList";

type HeroCategoryProps = {
  name: string;
  icon?:string
  heroes: Array<Hero>;
};

function HeroCategory({ name, heroes }: HeroCategoryProps) {
  return <Flex flexDirection="row" alignItems="center">
      <Heading size="xs" minWidth="150px">
        {name}
      </Heading>
      <HeroList heroes={heroes}/>
    </Flex>;
}

export default HeroCategory;