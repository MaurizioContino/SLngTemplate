import { DBConfig } from 'projects/ng-sl-db/src/public-api';
import { Area } from './models/Area';
import { Manager } from './models/Manager';
import { Region } from './models/Region';

const areas = [
  new Area(1, 1, 'LAZIO', 'BELMONTE'),
  new Area(2, 2, 'TOSCANA', 'BIRELLI'),
  new Area(3, 2, 'TOSCANA', 'BONDI'),
  new Area(4, 3, 'ABRUZZO/UMBRIA/MOLISE', 'ABRUZZO/UMBRIA/MOLISE'),
  new Area(5, 4, 'MARCHE', 'MARCHE'),
  new Area(6, 5, 'VENETO', 'CONTRERAS'),
  new Area(7, 6, 'PUGLIA/BASILICATA', 'PUGLIA/BASILICATA'),
  new Area(8, 5, 'VENETO', 'VENETO'),
  new Area(9, 7, 'EMILIA ROMAGNA', 'EMILIA ROMAGNA'),
  new Area(10, 8, 'LIGURIA', 'LIGURIA'),
  new Area(11, 8, 'LIGURIA', 'DEL NERO'),
  new Area(12, 9, 'SARDEGNA', 'SARDEGNA'),
  new Area(13, 3, 'ABRUZZO/UMBRIA/MOLISE', 'DI VITO'),
  new Area(14, 2, 'TOSCANA', 'GRILLI'),
  new Area(15, 10, 'PIEMONTE', 'PIEMONTE'),
  new Area(16, 6, 'PUGLIA/BASILICATA', 'MANIGRASSO'),
  new Area(17, 1, 'LAZIO', 'MARCHEGIANI'),
  new Area(18, 5, 'VENETO', 'NALIN'),
  new Area(19, 11, 'CALABRIA/SICILIA', 'NISTICO'),
  new Area(20, 1, 'LAZIO', 'LAZIO'),
  new Area(21, 12, 'CAMPANIA', 'PENTANGELO'),
  new Area(22, 11, 'CALABRIA/SICILIA', 'CALABRIA/SICILIA'),
  new Area(23, 12, 'CAMPANIA', 'PETRICCIUOLO C.'),
  new Area(24, 12, 'CAMPANIA', 'PETRICCIUOLO G.'),
  new Area(25, 2, 'TOSCANA', 'TOSCANA'),
  new Area(26, 13, 'LOMBARDIA', 'LOMBARDIA'),
  new Area(27, 12, 'CAMPANIA', 'RUOTOLO'),
  new Area(28, 13, 'LOMBARDIA', 'SIMONE'),
  new Area(29, 1, 'LAZIO', 'SORRENTINO'),
  new Area(30, 6, 'PUGLIA/BASILICATA', 'TRISCIUOGLIO'),
  new Area(31, 1, 'LAZIO', 'VALENTINI'),
  new Area(32, 1, 'LAZIO', 'VITALE')];


const regions = [
  new Region(1, 'LAZIO', 'Italia.jpg', 'Lazio.png', areas.filter(v=>v.IdRegion===1)),
  new Region(2, 'TOSCANA', 'Italia.jpg', 'Toscana.png', areas.filter(v=>v.IdRegion===2)),
  new Region(3, 'ABRUZZO/UMBRIA/MOLISE', 'Italia.jpg', 'AbruzzoUmbriaMolise.png', areas.filter(v=>v.IdRegion===3)),
  new Region(4, 'MARCHE', 'Italia.jpg', 'Marche.png', areas.filter(v=>v.IdRegion===4)),
  new Region(5, 'VENETO', 'Italia.jpg', 'Veneto.png', areas.filter(v=>v.IdRegion===5)),
  new Region(6, 'PUGLIA/BASILICATA', 'Italia.jpg', 'PugliaBasilicata.png', areas.filter(v=>v.IdRegion===6)),
  new Region(7, 'EMILIA ROMAGNA', 'Italia.jpg', 'EmiliaRomagna.png', areas.filter(v=>v.IdRegion===7)),
  new Region(8, 'LIGURIA', 'Italia.jpg', 'Liguria.png', areas.filter(v=>v.IdRegion===8)),
  new Region(9, 'SARDEGNA', 'Italia.jpg', 'Sardegna.png', areas.filter(v=>v.IdRegion===9)),
  new Region(10, 'PIEMONTE', 'Italia.jpg', 'Piemonte.png', areas.filter(v=>v.IdRegion===10)),
  new Region(11, 'CALABRIA/SICILIA', 'Italia.jpg', 'CalabriaSicilia.png', areas.filter(v=>v.IdRegion===11)),
  new Region(12, 'CAMPANIA', 'Italia.jpg', 'Campania.png', areas.filter(v=>v.IdRegion===12)),
  new Region(13, 'LOMBARDIA', 'Italia.jpg', 'Lombardia.png', areas.filter(v=>v.IdRegion===13))

];
const managers = [
  new Manager(1, 'Maurizio', 'Contino', 'Area manager',
    1, 'male-04.jpg', '14-640x480.jpg'),
  new Manager(2, 'Davide', 'Contino', 'Regional manager',
    3, 'male-04.jpg', '19-640x480.jpg'),
  new Manager(3,
    'Elena', 'Masotti', 'Area manager',
    4, 'female-06.jpg', '34-640x480.jpg',
  )];

export const dbConfig: DBConfig = {
  name: 'test',
  version: 1,
  stores: [
    {
      name: 'Aree',
      key:  'Id',
    },
    {
    name: 'Regions',
    key:  'Id',
    substores:[{
      name: 'Areas',
      key:  'Id',
      join: 'IdRegion'
    }],
  },
  {
    name: 'Managers',
    key:  'Id'
  }],
  Prefill:{
    Regions: regions,
    Managers: managers,
    Aree: areas
  }

};
