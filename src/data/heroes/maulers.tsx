import { Hero } from '../../model/heroes';
import * as Faction from '../../model/characteristics/factions';
import * as Attribute from '../../model/characteristics/attributes';
import * as Class from '../../model/characteristics/classes';
import { staticDomain } from '../../model/common';

export const Brutus: Hero = {
  id: 'BRUTUS',
  name: 'Brutus',
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Strength,
  class: Class.Tank,
  portraitURL: staticDomain+'mauler/brutus.webp'
};

export const Khasos: Hero = {
  id: 'KHASOS',
  name: 'Khasos',
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Strength,
  class: Class.Warrior,
  portraitURL: staticDomain+'mauler/khasos.webp'
};

export const Vurk: Hero = {
  id: 'VURK',
  name: 'Vurk',
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: staticDomain+'mauler/vurk.webp'
};

export const Numisu: Hero = {
  id: 'NUMISU',
  name: 'Numisu',
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Intelligence,
  class: Class.Support,
  portraitURL: staticDomain+'mauler/numisu.webp'
};

export const Skreg: Hero = {
  id: 'SKREG',
  name: 'Skreg',
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Strength,
  class: Class.Tank,
  portraitURL: staticDomain+'mauler/skreg.webp'
};

export const Warek: Hero = {
  id: 'WAREK',
  name: 'Warek',
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Strength,
  class: Class.Warrior,
  portraitURL: staticDomain+'mauler/warek.webp'
};

export const Antandra: Hero = {
  id: 'ANTANDRA',
  name: 'Antandra',
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Agility,
  class: Class.Warrior,
  portraitURL: staticDomain+'mauler/antandra.webp'
};

export const Safiya: Hero = {
  id: 'SAFIYA',
  name: 'Safiya',
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Intelligence,
  class: Class.Mage,
  portraitURL: staticDomain+'mauler/safiya.webp'
};

export const Satrana: Hero = {
  id: 'SATRANA',
  name: 'Satrana',
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Intelligence,
  class: Class.Mage,
  portraitURL: staticDomain+'mauler/satrana.webp'
};

export const Tidus: Hero = {
  id: 'TIDUS',
  name: 'Tidus',
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: staticDomain+'mauler/tidus.webp'
};

export const Drez: Hero = {
  id: 'DREZ',
  name: 'Drez',
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: staticDomain+'mauler/drez.webp'
};

export const Skriath: Hero = {
  id: 'SKRIATH',
  name: 'Skriath',
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Intelligence,
  class: Class.Mage,
  portraitURL: staticDomain+'mauler/skriath.webp'
};

export const Anoki: Hero = {
  id: 'ANOKI',
  name: 'Anoki',
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Strength,
  class: Class.Tank,
  portraitURL: staticDomain+'mauler/anoki.webp'
};

export const Kren: Hero = {
  id: 'KREN',
  name: 'Kren',
  nickname: [],
  faction: Faction.Mauler,
  attribute: Attribute.Agility,
  class: Class.Ranger,
  portraitURL: staticDomain+'mauler/kren.webp'
};

const heroes: Array<Hero> = [
  Brutus,
  Khasos,
  Vurk,
  Numisu,
  Skreg,
  Warek,
  Antandra,
  Safiya,
  Satrana,
  Tidus,
  Drez,
  Skriath,
  Anoki,
  Kren
];
export default heroes;
