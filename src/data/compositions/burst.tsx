import { Composition} from '../../model/compositions';
import * as Role from '../characteristics/role';
import * as Ligthbearers from '../heroes/ligthbearers'
import * as Maulers from '../heroes/maulers'
import * as Wilders from '../heroes/wilders'
import * as Graveborns from '../heroes/graveborns'
import * as Celestials from '../heroes/celestials'
import * as Hypogeans from '../heroes/hypogeans'
import * as Dimensional from '../heroes/dimensionals'

const burst: Composition = {
    id: 'BURST',
    name: 'Burst',
    tags: ['Campaign'],
    author: 'Arty and Alpattex',
    link: 'https://preview.redd.it/gpfow7lppvf61.png?width=2480&format=png&auto=webp&s=aa185e96d955659a03094d2c081e891aa5a12a51',
    coreHeroes: {
        role: Role.Core,
        heroes : [
            {
                hero: Wilders.Eironn
            },
            {
                hero: Wilders.Lyca
            }
        ]
    },
    flexHeroes: [
        {
            role: Role.SubDPS,
            heroes : [
                {
                    hero: Ligthbearers.Gwyneth
                },
                {
                    hero: Dimensional.JOKER
                },
                {
                    hero: Wilders.Kaz
                },
                {
                    hero: Wilders.Lorsan
                },
                {
                    hero: Hypogeans.Lucretia
                },
                {
                    hero: Ligthbearers.Raine
                },
                {
                    hero: Maulers.Safiya,
                },
                {
                    hero: Maulers.Satrana
                },
                {
                    hero: Wilders.Saurus
                },
                {
                    hero: Hypogeans.Zolrath
                }
            ]
        },
        {
            role: Role.CrowdControl,
            heroes : [
                {
                    hero: Celestials.Zaphrael
                },
                {
                    hero: Celestials.Athalia
                },
                {
                    hero: Maulers.Tidus
                },
                {
                    hero: Wilders.Tasi
                },
                {
                    hero: Celestials.Orthos
                },
                {
                    hero: Dimensional.Nakoruru
                },
                {
                    hero: Ligthbearers.Estrilda
                }
            ]

        },
        {
            role: Role.Tankiness,
            heroes : [
                {
                    hero: Hypogeans.Mezoth
                },
                {
                    hero: Maulers.Brutus
                },
                {
                    hero: Celestials.Alna
                } 
            ]
        }
    ]
};

export default burst;