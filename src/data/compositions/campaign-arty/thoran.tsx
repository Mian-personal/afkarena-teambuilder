import { Composition} from '../../../model/compositions';
import * as Role from '../../../model/characteristics/roles';
import * as Lightbearers from '../../heroes/lightbearers';
import * as Maulers from '../../heroes/maulers';
import * as Wilders from '../../heroes/wilders';
import * as Graveborns from '../../heroes/graveborns';
import * as Celestials from '../../heroes/celestials';
import * as Hypogeans from '../../heroes/hypogeans';

const thoran: Composition = {
  id: 'CAMPAIGN-ARTY-THORAN',
  name: 'Thoran Cheese',
  tags: ['PvE'],
  author: 'Arty and Alpattex + CatCalledPippi',
  updateDate: 'Feb 2021',
  links: [{
    label: 'Visual Guide to End Game PvE Formations by Arty and Alpattex', 
    url: 'https://preview.redd.it/off9mrptovf61.png?width=2480&format=png&auto=webp&s=70ee0f40dfcff132968b2f83663d0fc7cbb6b78e',
  }, {
    label: 'A Comprehensive Guide to Thoran Cheese (Even For the Haters)', 
    url: 'https://www.reddit.com/r/afkarena/comments/m5wji8/a_comprehensive_guide_to_thoran_cheese_even_for/',
  }],
  coreHeroes: {
    role: Role.Core,
    heroes : [
      {
        ...Graveborns.Thoran,
        recommended: true
      }
    ]
  },
  flexHeroes: [
    {
      role: Role.Displacement,
      heroes : [
        {
          ...Graveborns.Kelthur,
          recommended: true
        },
        {
          ...Wilders.Eironn
        },
        {
          ...Celestials.Athalia
        },
        {
          ...Graveborns.Nara
        },
        {
          ...Graveborns.Oden
        },
        {
          ...Wilders.Pippa
        },
        {
          ...Maulers.Skriath
        },
      ]
    },
    {
      role: Role.Energy,
      heroes : [
        {
          ...Wilders.Lyca,
          recommended: true
        },
        {
          ...Lightbearers.Rowan
        },
        {
          ...Hypogeans.Ezizh
        },
        {
          ...Lightbearers.Raine
        }
      ]
    },
    {
      role: Role.SubDPS,
      heroes : [
        {
          ...Wilders.Lorsan,
          recommended: true
        },
        {
          ...Celestials.Talene,
          recommended: true
        },
        {
          ...Celestials.Flora
        },
      ]

    }
  ]
};

export default thoran;