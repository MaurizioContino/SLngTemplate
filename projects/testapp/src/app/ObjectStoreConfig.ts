import { DBConfig } from 'ngx-indexed-db';

export const dbConfig: DBConfig  = {
  name: 'test',
  version: 1,
  objectStoresMeta: [{
    store: 'Aree',
    storeConfig:
      { keyPath: 'Name', autoIncrement: false},
    storeSchema: [
      { name: 'Name', keypath: 'Name',  options: { unique: false } },
      { name: 'Region', keypath: 'Name',  options: { unique: false } },
      { name: 'isnew', keypath: 'isnew',  options: { unique: false } },
      { name: 'updated', keypath: 'updated',  options: { unique: false } },
      { name: 'originalupdated', keypath: 'originalupdated',  options: { unique: false } },
      { name: 'deleted', keypath: 'deleted',  options: { unique: false } },
    ]
  },
  {
    store: 'Regions',
    storeConfig:
      { keyPath: 'Name', autoIncrement: false},
    storeSchema: [
      { name: 'Name', keypath: 'Name',  options: { unique: false } },
      { name: 'BackgroundImage', keypath: 'BackgroundImage',  options: { unique: false } },
      { name: 'Avatar', keypath: 'Avatar',  options: { unique: false } },
      { name: 'isnew', keypath: 'isnew',  options: { unique: false } },
      { name: 'updated', keypath: 'updated',  options: { unique: false } },
      { name: 'originalupdated', keypath: 'originalupdated',  options: { unique: false } },
      { name: 'deleted', keypath: 'deleted',  options: { unique: false } },
    ]
  },
  {
    store: 'Managers',
    storeConfig:
      { keyPath: 'Name', autoIncrement: false},
    storeSchema: [
      { name: 'Name', keypath: 'Name',  options: { unique: false } },
      { name: 'Surname', keypath: 'Surname',  options: { unique: false } },
      { name: 'Role', keypath: 'Role',  options: { unique: false } },
      { name: 'Area', keypath: 'Area',  options: { unique: false } },
      { name: 'BackgroundImage', keypath: 'BackgroundImage',  options: { unique: false } },
      { name: 'Avatar', keypath: 'Avatar',  options: { unique: false } },
      { name: 'isnew', keypath: 'isnew',  options: { unique: false } },
      { name: 'updated', keypath: 'updated',  options: { unique: false } },
      { name: 'originalupdated', keypath: 'originalupdated',  options: { unique: false } },
      { name: 'deleted', keypath: 'deleted',  options: { unique: false } },
    ]
  }]
};
