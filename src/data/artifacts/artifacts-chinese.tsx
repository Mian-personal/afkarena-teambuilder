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
  Limit,
} from '../../model/characteristics/artifacts';

const artifactGuide: ArtifactGuide = {
  id: 'CHINESE',
  name: '【攻略君】全英雄神器佩戴建议图',
  author: '攻略君',
  updateDate: 'Mai 2021',
  links: [{
    label: '【攻略君】全英雄神器佩戴建议图',
    url: 'https://www.taptap.com/topic/18146835',
  }], 
  artifacts : new Map([
    [Dimensionals.Ainz,           {rank1: [Windbinder],   rank2: [Warden],        rank3: [Call]}],
    [Dimensionals.Albedo,         {rank1: [Barricade],    rank2: [Waistband],     rank3: []}],
    [Celestials.Alna,             {rank1: [Chaos],        rank2: [Carnage],       rank3: [Call]}],
    [Maulers.Anoki,               {rank1: [Barricade],    rank2: [Waistband],     rank3: [Chalice]}],
    [Maulers.Antandra,            {rank1: [Chaos],        rank2: [Eye],           rank3: [Call]}],
    [Dimensionals.Arthur,         {rank1: [Barricade],    rank2: [Waistband],     rank3: [Chalice]}],
    [Celestials.Athalia,          {rank1: [Shroud],       rank2: [Eye],           rank3: [Blade]}],
    [Graveborns.Baden,            {rank1: [Chaos],        rank2: [Eye],           rank3: [Call]}],
    [Lightbearers.Belinda,        {rank1: [Windbinder],   rank2: [Warden],        rank3: [Eye]}],
    [Maulers.Brutus,              {rank1: [Barricade],    rank2: [Chalice],       rank3: [Blade]}],
    [Lightbearers.Cecilia,        {rank1: [Eye],          rank2: [Shroud],        rank3: [Blade]}],
    [Graveborns.Daimon,           {rank1: [Call],         rank2: [Barricade],     rank3: [Waistband]}],
    // [Graveborns.Desira,           {rank1: [Call],         rank2: [Tidebearer],    rank3: [Blade]}],
    [Maulers.Drez,                {rank1: [Shroud],       rank2: [Longbow],       rank3: [Eye]}],
    [Wilders.Eironn,              {rank1: [Call],         rank2: [Shroud],        rank3: [Eye]}],
    [Celestials.ElijahLailah,     {rank1: [Call],         rank2: [Tidebearer],    rank3: []}],
    [Lightbearers.Eluard,         {rank1: [Windbinder],   rank2: [Warden],        rank3: [Call]}],
    [Lightbearers.Estrilda,       {rank1: [Chaos],        rank2: [Eye],           rank3: [Blade]}],
    [Dimensionals.Ezio,           {rank1: [Shroud],       rank2: [Eye],           rank3: [Blade]}],
    [Hypogeans.Ezizh,             {rank1: [Tidebearer],   rank2: [Call],          rank3: [Seraphic]}],
    [Lightbearers.Fawkes,         {rank1: [Eye],          rank2: [Grace],         rank3: [Shroud]}],
    [Graveborns.Ferael,           {rank1: [Eye],          rank2: [Shroud],        rank3: [Call]}],
    [Celestials.Flora,            {rank1: [Eye],          rank2: [Blade],         rank3: [Windbinder]}],
    [Wilders.Gorvo,               {rank1: [Waistband],    rank2: [Barricade],     rank3: [Chalice]}],
    [Graveborns.Grezhul,          {rank1: [Eye],          rank2: [Blade],         rank3: [Barricade]}],
    [Lightbearers.Gwyneth,        {rank1: [Shroud],       rank2: [Eye],           rank3: [Blade]}],
    [Lightbearers.Hendrik,        {rank1: [Barricade],    rank2: [Waistband],     rank3: [Chalice]}],
    [Graveborns.Isabella,         {rank1: [Warden],       rank2: [Windbinder],    rank3: [Eye]}],
    [Graveborns.Izold,            {rank1: [Chaos],        rank2: [Call],          rank3: [Eye]}],
    [Dimensionals.JOKER,          {rank1: [Shroud],       rank2: [Eye],           rank3: [Blade]}],
    [Wilders.Kaz,                 {rank1: [Grace],        rank2: [Shroud],        rank3: [Eye]}],
    [Graveborns.Kelthur,          {rank1: [Shroud],       rank2: [Blade],         rank3: [Eye]}],
    [Maulers.Khasos,              {rank1: [Chaos],        rank2: [Eye],           rank3: [Blade]}],
    [Hypogeans.Khazard,           {rank1: [Windbinder],   rank2: [Eye],           rank3: [Call]}],
    [Maulers.Kren,                {rank1: [Shroud],       rank2: [Eye],           rank3: [Blade]}],
    // [Hypogeans.Leofric,           {rank1: [Call],         rank2: [Tidebearer],    rank3: [Seraphic]}],
    [Wilders.Lorsan,              {rank1: [Windbinder],   rank2: [Eye],           rank3: [Grace]}],
    [Lightbearers.Lucius,         {rank1: [Barricade],    rank2: [Call],          rank3: [Chalice]}],
    [Hypogeans.Lucretia,          {rank1: [Longbow],      rank2: [Shroud],        rank3: [Blade]}],
    [Wilders.Lyca,                {rank1: [Eye],          rank2: [Shroud],        rank3: [Grace]}],
    [Hypogeans.Mehira,            {rank1: [Windbinder],   rank2: [Call],          rank3: [Drape]}],
    [Hypogeans.Mezoth,            {rank1: [Barricade],    rank2: [Waistband],     rank3: [Chalice]}],
    [Celestials.Morael,           {rank1: [Windbinder],   rank2: [Eye],           rank3: [Call]}],
    [Hypogeans.Mortas,            {rank1: [Tidebearer],   rank2: [Call],          rank3: [Eye]}],
    [Dimensionals.Nakoruru,       {rank1: [Eye],          rank2: [Shroud],        rank3: [Blade]}],
    [Graveborns.Nara,             {rank1: [Chaos],        rank2: [Eye],           rank3: [Call]}],
    [Wilders.Nemora,              {rank1: [Tidebearer],   rank2: [Call],          rank3: [Grace]}],
    [Maulers.Numisu,              {rank1: [Call],         rank2: [Tidebearer],    rank3: []}],
    [Graveborns.Oden,             {rank1: [Windbinder],   rank2: [Eye],           rank3: [Warden]}],
    [Celestials.Orthos,           {rank1: [Barricade],    rank2: [Waistband],     rank3: [Chalice]}],
    [Lightbearers.Oscar,          {rank1: [Shroud],       rank2: [Eye],           rank3: [Blade]}],
    [Lightbearers.Peggy,          {rank1: [Tidebearer],   rank2: [Call],          rank3: [Eye]}],
    [Wilders.Pippa,               {rank1: [Windbinder],   rank2: [Call],          rank3: [Eye]}],
    // [Dimensionals.PrinceOfPersia, {rank1: [Eye],          rank2: [Grace],         rank3: [Shroud]}],
    [Dimensionals.QUEEN,          {rank1: [Eye],          rank2: [Chaos],         rank3: [Call]}],
    [Lightbearers.Raine,          {rank1: [Call],         rank2: [Tidebearer],    rank3: [Eye]}],
    [Wilders.Raku,                {rank1: [Shroud],       rank2: [Eye],           rank3: [Longbow]}],
    [Wilders.Respen,              {rank1: [Shroud],       rank2: [Eye],           rank3: [Call]}],
    [Lightbearers.Rigby,          {rank1: [Chalice],      rank2: [Grace],         rank3: [Chaos]}],
    [Lightbearers.Rosaline,       {rank1: [Blade],        rank2: [Eye],           rank3: [Call]}],
    [Lightbearers.Rowan,          {rank1: [Call],         rank2: [Tidebearer],    rank3: [Grace]}],
    [Maulers.Safiya,              {rank1: [Windbinder],   rank2: [Eye],           rank3: [Blade]}],
    [Maulers.Satrana,             {rank1: [Windbinder],   rank2: [Eye],           rank3: [Call]}],
    [Wilders.Saurus,              {rank1: [Chaos],        rank2: [Eye],           rank3: [Blade]}],
    [Wilders.Seirus,              {rank1: [Chaos],        rank2: [Chalice],       rank3: [Call]}],
    [Graveborns.Shemira,          {rank1: [Warden],       rank2: [Windbinder],    rank3: [Eye]}],
    [Graveborns.Silas,            {rank1: [Tidebearer],   rank2: [Call],          rank3: [Blade]}],
    [Maulers.Skreg,               {rank1: [Waistband],    rank2: [Call],          rank3: [Barricade]}],
    [Maulers.Skriath,             {rank1: [Windbinder],   rank2: [Warden],        rank3: [Call]}],
    [Wilders.Solise,              {rank1: [Windbinder],   rank2: [Eye],           rank3: [Blade]}],
    [Celestials.Talene,           {rank1: [Blade],        rank2: [Eye],           rank3: [Tidebearer]}],
    [Wilders.Tasi,                {rank1: [Call],         rank2: [Tidebearer],    rank3: [Eye]}],
    [Lightbearers.Thane,          {rank1: [Eye],          rank2: [Call],          rank3: [Shroud]}],
    [Graveborns.Theowyn,          {rank1: [Eye],          rank2: [Call],          rank3: [Shroud]}],
    [Graveborns.Thoran,           {rank1: [Call],         rank2: [Blade],         rank3: [Barricade]}],
    [Maulers.Tidus,               {rank1: [Shroud],       rank2: [Eye],           rank3: [Call]}],
    [Graveborns.Torne,            {rank1: [Barricade],    rank2: [Waistband],     rank3: [Chalice]}],
    [Dimensionals.Ukyo,           {rank1: [Eye],          rank2: [Chaos],         rank3: [Call]}],
    [Wilders.Ulmus,               {rank1: [Barricade],    rank2: [Waistband],     rank3: [Chalice]}],
    [Maulers.Vurk,                {rank1: [Shroud],       rank2: [Eye],           rank3: [Call]}],
    [Maulers.Warek,               {rank1: [Chaos],        rank2: [Eye],           rank3: [Chalice]}],
    [Celestials.Wukong,           {rank1: [Chaos],        rank2: [Eye],           rank3: [Blade]}],
    [Celestials.Zaphrael,         {rank1: [Windbinder],   rank2: [Warden],        rank3: [Call]}],
    [Hypogeans.Zolrath,           {rank1: [Chaos],        rank2: [Eye],           rank3: [Blade]}],
  ]),  
};
export default artifactGuide;