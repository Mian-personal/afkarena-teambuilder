import { ArtifactGuide } from '../../model/artifacts';
import * as Lightbearers from '../heroes/lightbearers';
import * as Maulers from '../heroes/maulers';
import * as Wilders from '../heroes/wilders';
import * as Graveborns from '../heroes/graveborns';
import * as Celestials from '../heroes/celestials';
import * as Hypogeans from '../heroes/hypogeans';
import * as Dimensionals from '../heroes/dimensionals';
import { 
  Grace,       
  Eye,         
  Call,        
  Drape,       
  Blade,       
  Chalice,     
  Conviction, 
  Barricade,  
  Waistband,  
  Chaos,       
  Carnage,     
  Shroud,      
  Longbow,     
  Windbinder, 
  Warden,      
  Tidebearer, 
  Seraphic,
  Pauldron,
} from '../../model/characteristics/artifacts';

const artifactGuide: ArtifactGuide = {
  id: 'AFKARENABOSS',
  name: 'Full Hero Artifact List',
  author: 'AfkArenaBoss',
  updateDate: 'Jun 2021',
  links:   [{
    label: 'Full Hero Artifact List For AFK Arena',
    url: 'https://afkarenaboss.com/full-artifact-guide-for-afk-arena/',
  }], 
  artifacts : new Map([
    [Dimensionals.Ainz,           {rank1: [Windbinder],   rank2: [Eye],           rank3: [Call]}],
    [Dimensionals.Albedo,         {rank1: [Waistband],    rank2: [Chalice],       rank3: [Barricade]}],
    [Celestials.Alna,             {rank1: [Chaos],        rank2: [Eye],           rank3: [Call]}],
    [Maulers.Anoki,               {rank1: [Waistband],    rank2: [Chalice],       rank3: [Barricade]}],
    [Maulers.Antandra,            {rank1: [Chaos],        rank2: [Pauldron],      rank3: [Carnage]}],
    [Dimensionals.Arthur,         {rank1: [Barricade],    rank2: [Chalice],       rank3: [Waistband]}],
    [Celestials.Athalia,          {rank1: [Longbow],      rank2: [Eye],           rank3: [Shroud]}],
    [Graveborns.Baden,            {rank1: [Pauldron],     rank2: [Chaos],         rank3: [Eye]}],
    [Lightbearers.Belinda,        {rank1: [Windbinder],   rank2: [Warden],        rank3: [Eye]}],
    [Maulers.Brutus,              {rank1: [Blade],        rank2: [Barricade],     rank3: [Waistband]}],
    [Lightbearers.Cecilia,        {rank1: [Shroud],       rank2: [Eye],           rank3: [Blade]}],
    [Graveborns.Daimon,           {rank1: [Call],         rank2: [Waistband],     rank3: [Drape]}],
    [Maulers.Drez,                {rank1: [Eye],          rank2: [Blade],         rank3: [Shroud]}],
    [Wilders.Eironn,              {rank1: [Longbow],      rank2: [Call, Shroud],  rank3: [Eye]}],
    [Celestials.ElijahLailah,     {rank1: [Tidebearer],   rank2: [Call],          rank3: [Eye]}],
    [Lightbearers.Eluard,         {rank1: [Call],         rank2: [Windbinder],    rank3: [Eye]}],
    [Lightbearers.Estrilda,       {rank1: [Chaos],        rank2: [Pauldron],      rank3: [Carnage]}],
    [Dimensionals.Ezio,           {rank1: [Call],         rank2: [Longbow],       rank3: [Shroud]}],
    [Hypogeans.Ezizh,             {rank1: [Tidebearer],   rank2: [Seraphic],      rank3: [Call]}],
    [Lightbearers.Fawkes,         {rank1: [Eye],          rank2: [Blade],         rank3: [Shroud]}],
    [Graveborns.Ferael,           {rank1: [Eye],          rank2: [Blade],         rank3: [Shroud]}],
    [Celestials.Flora,            {rank1: [Eye],          rank2: [Windbinder],    rank3: [Conviction]}],
    [Wilders.Gorvo,               {rank1: [Waistband],    rank2: [Grace],         rank3: [Chalice]}],
    [Graveborns.Grezhul,          {rank1: [Chalice],      rank2: [Eye],           rank3: [Blade]}],
    [Lightbearers.Gwyneth,        {rank1: [Longbow],      rank2: [Eye],           rank3: [Shroud]}],
    [Lightbearers.Hendrik,        {rank1: [Barricade],    rank2: [Waistband],     rank3: [Chalice]}],
    [Graveborns.Isabella,         {rank1: [Eye],          rank2: [Windbinder],    rank3: [Warden]}],
    [Graveborns.Izold,            {rank1: [Pauldron],     rank2: [Chaos],         rank3: [Carnage]}],
    [Dimensionals.JOKER,          {rank1: [Shroud],       rank2: [Eye],           rank3: [Blade]}],
    [Wilders.Kaz,                 {rank1: [Grace],        rank2: [Shroud],        rank3: [Eye]}],
    [Graveborns.Kelthur,          {rank1: [Shroud],       rank2: [Eye],           rank3: [Grace]}],
    [Maulers.Khasos,              {rank1: [Chaos],        rank2: [Pauldron],      rank3: [Eye]}],
    [Hypogeans.Khazard,           {rank1: [Windbinder],   rank2: [Eye],           rank3: [Call]}],
    [Maulers.Kren,                {rank1: [Eye],          rank2: [Call],          rank3: [Shroud]}],
    [Hypogeans.Leofric,           {rank1: [Call],         rank2: [Tidebearer],    rank3: [Seraphic]}],
    [Wilders.Lorsan,              {rank1: [Windbinder],   rank2: [Eye],           rank3: [Warden]}],
    [Lightbearers.Lucius,         {rank1: [Waistband],    rank2: [Barricade],     rank3: [Chalice]}],
    [Hypogeans.Lucretia,          {rank1: [Longbow],      rank2: [Eye],           rank3: [Blade]}],
    [Wilders.Lyca,                {rank1: [Longbow],      rank2: [Shroud],        rank3: [Eye]}],
    [Hypogeans.Mehira,            {rank1: [Windbinder],   rank2: [Warden],        rank3: [Drape]}],
    [Hypogeans.Mezoth,            {rank1: [Waistband],    rank2: [Barricade],     rank3: [Chalice]}],
    [Celestials.Morael,           {rank1: [Windbinder],   rank2: [Eye],           rank3: [Call]}],
    [Hypogeans.Mortas,            {rank1: [Tidebearer],   rank2: [Eye],           rank3: [Seraphic]}],
    [Dimensionals.Nakoruru,       {rank1: [Eye],          rank2: [Grace],         rank3: [Shroud]}],
    [Graveborns.Nara,             {rank1: [Pauldron],     rank2: [Chaos],         rank3: [Eye]}],
    [Wilders.Nemora,              {rank1: [Tidebearer],   rank2: [Call],          rank3: [Seraphic]}],
    [Maulers.Numisu,              {rank1: [Call],         rank2: [Tidebearer],    rank3: [Seraphic]}],
    [Graveborns.Oden,             {rank1: [Windbinder],   rank2: [Eye],           rank3: [Warden]}],
    [Celestials.Orthos,           {rank1: [Waistband],    rank2: [Chalice],       rank3: [Drape]}],
    [Lightbearers.Oscar,          {rank1: [Eye],          rank2: [Shroud],        rank3: [Blade]}],
    [Lightbearers.Peggy,          {rank1: [Call],         rank2: [Tidebearer],    rank3: [Eye]}],
    [Wilders.Pippa,               {rank1: [Warden],       rank2: [Call],          rank3: [Windbinder]}],
    [Dimensionals.PrinceOfPersia, {rank1: [Longbow],      rank2: [Eye],           rank3: [Shroud]}],
    [Dimensionals.QUEEN,          {rank1: [Eye],          rank2: [Chaos],         rank3: [Pauldron]}],
    [Lightbearers.Raine,          {rank1: [Call],         rank2: [Tidebearer],    rank3: [Grace]}],
    [Wilders.Raku,                {rank1: [Longbow],      rank2: [Shroud],        rank3: [Eye]}],
    [Wilders.Respen,              {rank1: [Longbow],      rank2: [Eye],           rank3: [Shroud]}],
    [Lightbearers.Rigby,          {rank1: [Pauldron],     rank2: [Chalice],       rank3: [Grace]}],
    [Lightbearers.Rosaline,       {rank1: [Eye],          rank2: [Tidebearer],    rank3: [Call]}],
    [Lightbearers.Rowan,          {rank1: [Call],         rank2: [Tidebearer],    rank3: [Seraphic]}],
    [Maulers.Safiya,              {rank1: [Windbinder],   rank2: [Eye],           rank3: [Call]}],
    [Maulers.Satrana,             {rank1: [Windbinder],   rank2: [Eye],           rank3: [Warden]}],
    [Wilders.Saurus,              {rank1: [Chaos],        rank2: [Blade],         rank3: [Eye]}],
    [Wilders.Seirus,              {rank1: [Pauldron],     rank2: [Chalice],       rank3: [Call]}],
    [Graveborns.Shemira,          {rank1: [Windbinder],   rank2: [Eye],           rank3: [Warden]}],
    [Graveborns.Silas,            {rank1: [Blade],        rank2: [Drape],         rank3: [Tidebearer]}],
    [Maulers.Skreg,               {rank1: [Chalice],      rank2: [Waistband],     rank3: [Call]}],
    [Maulers.Skriath,             {rank1: [Warden],       rank2: [Windbinder],    rank3: [Eye]}],
    [Wilders.Solise,              {rank1: [Windbinder],   rank2: [Eye],           rank3: [Warden]}],
    [Celestials.Talene,           {rank1: [Blade],        rank2: [Call],          rank3: [Eye]}],
    [Wilders.Tasi,                {rank1: [Eye],          rank2: [Tidebearer],    rank3: [Call]}],
    [Lightbearers.Thane,          {rank1: [Longbow],      rank2: [Eye],           rank3: [Shroud]}],
    [Graveborns.Theowyn,          {rank1: [Eye],          rank2: [Shroud],        rank3: [Call]}],
    [Graveborns.Thoran,           {rank1: [Call],         rank2: [Waistband],     rank3: [Chalice]}],
    [Maulers.Tidus,               {rank1: [Shroud],       rank2: [Grace],         rank3: [Longbow]}],
    [Graveborns.Torne,            {rank1: [Waistband],    rank2: [Chalice],       rank3: [Blade]}],
    [Dimensionals.Ukyo,           {rank1: [Chaos],        rank2: [Grace],         rank3: [Pauldron]}],
    [Wilders.Ulmus,               {rank1: [Drape],        rank2: [Chalice],       rank3: [Call]}],
    [Maulers.Vurk,                {rank1: [Longbow],      rank2: [Eye],           rank3: [Blade]}],
    [Maulers.Warek,               {rank1: [Pauldron],     rank2: [Chaos],         rank3: [Eye]}],
    [Celestials.Wukong,           {rank1: [Chaos],        rank2: [Pauldron],      rank3: [Eye]}],
    [Celestials.Zaphrael,         {rank1: [Windbinder],   rank2: [Eye],           rank3: [Warden]}],
    [Hypogeans.Zolrath,           {rank1: [Carnage],      rank2: [Pauldron],         rank3: [Eye]}],
  ]),
};
export default artifactGuide;