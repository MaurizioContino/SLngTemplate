import { DBConfig } from 'ngx-indexed-db';

import { Area } from './models/Area';
import { Manager } from './models/Manager';
import { Region } from './models/Region';

const regions = [
  new Region(1, 'LAZIO', 'Italia.jpg', 'Lazio.png'),
  new Region(2, 'TOSCANA', 'Italia.jpg', 'Toscana.png'),
  new Region(3, 'ABRUZZO/UMBRIA/MOLISE', 'Italia.jpg', 'AbruzzoUmbriaMolise.png'),
  new Region(4, 'MARCHE', 'Italia.jpg', 'Marche.png'),
  new Region(5, 'VENETO', 'Italia.jpg', 'Veneto.png'),
  new Region(6, 'PUGLIA/BASILICATA', 'Italia.jpg', 'PugliaBasilicata.png'),
  new Region(7, 'EMILIA ROMAGNA', 'Italia.jpg', 'EmiliaRomagna.png'),
  new Region(8, 'LIGURIA', 'Italia.jpg', 'Liguria.png'),
  new Region(9, 'SARDEGNA', 'Italia.jpg', 'Sardegna.png'),
  new Region(10, 'PIEMONTE', 'Italia.jpg', 'Piemonte.png'),
  new Region(11, 'CALABRIA/SICILIA', 'Italia.jpg', 'CalabriaSicilia.png'),
  new Region(12, 'CAMPANIA', 'Italia.jpg', 'Campania.png'),
  new Region(13, 'LOMBARDIA', 'Italia.jpg', 'Lombardia.png')

];
const Areas = [
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

const managers = [
  new Manager(1, 'Maurizio', 'Contino', 'Area manager',
    1, 'male-04.jpg', '14-640x480.jpg'),
  new Manager(2, 'Davide', 'Contino', 'Regional manager',
    3, 'male-04.jpg', '19-640x480.jpg'),
  new Manager(3,
    'Elena', 'Masotti', 'Area manager',
    4, 'female-06.jpg', '34-640x480.jpg',
  )];

export function migrationFactory() {
  // The animal table was added with version 2 but none of the existing tables or data needed
  // to be modified so a migrator for that version is not included.
  return {
    1: (db: IDBDatabase, transaction: IDBTransaction) => {
      const Areastore = transaction.objectStore('Aree');
      const Regionstore = transaction.objectStore('Regions');
      const Managerstore = transaction.objectStore('Managers');
      regions.forEach(r => {
        Regionstore.put(r);
      })
      Areas.forEach(a => {
        Areastore.put(a);
      })
      managers.forEach(m => {
        Managerstore.put(m);
      })

    },

  };
}
export const dbConfig: DBConfig = {
  name: 'test',
  version: 1,
  objectStoresMeta: [{
    store: 'Aree',
    storeConfig:
      { keyPath: 'Id', autoIncrement: true },
    storeSchema: [
      { name: 'Id', keypath: 'Id', options: { unique: true } },
      { name: 'Name', keypath: 'Name', options: { unique: false } },
      { name: 'IdRegion', keypath: 'IdRegion', options: { unique: false } },
      { name: 'isnew', keypath: 'isnew', options: { unique: false } },
      { name: 'updated', keypath: 'updated', options: { unique: false } },
      { name: 'originalupdated', keypath: 'originalupdated', options: { unique: false } },
      { name: 'deleted', keypath: 'deleted', options: { unique: false } },
    ],


  },
  {
    store: 'Regions',
    storeConfig:
      { keyPath: 'Id', autoIncrement: true },
    storeSchema: [
      { name: 'Id', keypath: 'Id', options: { unique: true } },
      { name: 'Name', keypath: 'Name', options: { unique: false } },
      { name: 'BackgroundImage', keypath: 'BackgroundImage', options: { unique: false } },
      { name: 'Avatar', keypath: 'Avatar', options: { unique: false } },
      { name: 'isnew', keypath: 'isnew', options: { unique: false } },
      { name: 'updated', keypath: 'updated', options: { unique: false } },
      { name: 'originalupdated', keypath: 'originalupdated', options: { unique: false } },
      { name: 'deleted', keypath: 'deleted', options: { unique: false } },
    ]
  },
  {
    store: 'Managers',
    storeConfig:
      { keyPath: 'Id', autoIncrement: true },
    storeSchema: [
      { name: 'Id', keypath: 'Id', options: { unique: true } },
      { name: 'Name', keypath: 'Name', options: { unique: false } },
      { name: 'Surname', keypath: 'Surname', options: { unique: false } },
      { name: 'Role', keypath: 'Role', options: { unique: false } },
      { name: 'IdArea', keypath: 'IdArea', options: { unique: false } },
      { name: 'BackgroundImage', keypath: 'BackgroundImage', options: { unique: false } },
      { name: 'Avatar', keypath: 'Avatar', options: { unique: false } },
      { name: 'isnew', keypath: 'isnew', options: { unique: false } },
      { name: 'updated', keypath: 'updated', options: { unique: false } },
      { name: 'originalupdated', keypath: 'originalupdated', options: { unique: false } },
      { name: 'deleted', keypath: 'deleted', options: { unique: false } },
    ]
  }],
  migrationFactory

};
