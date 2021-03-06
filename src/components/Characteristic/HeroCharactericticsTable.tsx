
import React from 'react';
import { Center, HStack } from '@chakra-ui/react';
import { Hero } from '../../model/heroes';
import CharacteristicTable from './CharacteristicTable';
import { Attribute, Class, Faction } from '../../model/characteristics/characteristics';
import { Factions } from '../../model/characteristics/factions';
import { Classes } from '../../model/characteristics/classes';
import { Attributes } from '../../model/characteristics/attributes';

type HeroCharactericticsTableProps = {
  heroes: Array<Hero>;
};

function HeroCharactericticsTable({heroes} : HeroCharactericticsTableProps):JSX.Element {

  const factionMap = new Map(Factions.map((c): [Faction, number] => [c, 0]));
  const classMap = new Map(Classes.map((c): [Class, number] => [c, 0]));
  const attributeMap = new Map(Attributes.map((c): [Attribute, number] => [c, 0]));
  
  heroes.forEach(h => {
    factionMap.set(h.faction, factionMap.get(h.faction) as number + 1);
    classMap.set(h.class, classMap.get(h.class) as number + 1);
    attributeMap.set(h.attribute, attributeMap.get(h.attribute) as number + 1);
  });

  return <Center flexShrink={0}>
    <HStack alignItems='start' spacing="1.5rem">
      <CharacteristicTable characterictics={factionMap}/>
      <CharacteristicTable characterictics={classMap}/>
      <CharacteristicTable characterictics={attributeMap}/>
    </HStack>
  </Center>;
}

export default HeroCharactericticsTable;
