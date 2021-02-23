import { Composition} from '../../../model/compositions';
import * as Role from '../../characteristics/role';
import * as Lightbearers from '../../heroes/lightbearers'
import * as Maulers from '../../heroes/maulers'
import * as Wilders from '../../heroes/wilders'
import * as Graveborns from '../../heroes/graveborns'
import * as Celestials from '../../heroes/celestials'
import * as Hypogeans from '../../heroes/hypogeans'
import * as Dimensional from '../../heroes/dimensionals'

const stall: Composition = {
    id: 'PVP-ARTY-STALL',
    name: 'Stall',
    tags: ['PvP'],
    author: 'Arty and Alpattex',
    updateDate: 'Jan 2021',
    link: 'https://www.reddit.com/r/afkarena/comments/kvuvsp/comprehensive_pvp_guide_by_arty_alpattex/',
    coreHeroes: {
        role: Role.Core,
        heroes : [
            {
                hero: Celestials.Talene
            },
            {
                hero: Celestials.Flora
            }
        ]
    },
    flexHeroes: [
        {
            role: Role.SubDPS,
            heroes : [
                {
                    hero: Wilders.Saurus
                },
                {
                    hero: Dimensional.Ezio,
                },
            ]
        },
        {
            role: Role.Tankiness,
            heroes : [
                {
                    hero: Hypogeans.Mezoth
                },
                {
                    hero: Celestials.Orthos
                },
                {
                    hero: Graveborns.Thoran
                },
                {
                    hero: Celestials.Alna
                },
                {
                    hero: Maulers.Skreg
                },
                {
                    hero: Celestials.Wukong,
                },
                {
                    hero: Dimensional.Albedo,
                },
            ]

        },
        {
            role: Role.Utility,
            heroes : [
                {
                    hero: Wilders.Tasi
                },
                {
                    hero: Wilders.Nemora
                } 
            ]
        }
    ]
};

export default stall;