
import { DBConfig } from '@soloud/SlDb';
import { Area } from './models/Area';
import { Manager } from './models/Manager';
import { MonitorItem } from './models/Monitoritem';
import { MonitorResultItem } from './models/MonitorResults';
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
  new Region(1, 'LAZIO', 'backgrounds/Italia.jpg', 'regions/Lazio.png', areas.filter(v=>v.IdRegion===1)),
  new Region(2, 'TOSCANA', 'regions/Italia.jpg', 'regions/Toscana.png', areas.filter(v=>v.IdRegion===2)),
  new Region(3, 'ABRUZZO/UMBRIA/MOLISE', 'regions/Italia.jpg', 'regions/AbruzzoUmbriaMolise.png', areas.filter(v=>v.IdRegion===3)),
  new Region(4, 'MARCHE', 'backgrounds/Italia.jpg', 'regions/Marche.png', areas.filter(v=>v.IdRegion===4)),
  new Region(5, 'VENETO', 'backgrounds/Italia.jpg', 'regions/Veneto.png', areas.filter(v=>v.IdRegion===5)),
  new Region(6, 'PUGLIA/BASILICATA', 'backgrounds/Italia.jpg', 'regions/PugliaBasilicata.png', areas.filter(v=>v.IdRegion===6)),
  new Region(7, 'EMILIA ROMAGNA', 'backgrounds/Italia.jpg', 'regions/EmiliaRomagna.png', areas.filter(v=>v.IdRegion===7)),
  new Region(8, 'LIGURIA', 'backgrounds/Italia.jpg', 'regions/Liguria.png', areas.filter(v=>v.IdRegion===8)),
  new Region(9, 'SARDEGNA', 'backgrounds/Italia.jpg', 'regions/Sardegna.png', areas.filter(v=>v.IdRegion===9)),
  new Region(10, 'PIEMONTE', 'backgrounds/Italia.jpg', 'regions/Piemonte.png', areas.filter(v=>v.IdRegion===10)),
  new Region(11, 'CALABRIA/SICILIA', 'backgrounds/Italia.jpg', 'regions/CalabriaSicilia.png', areas.filter(v=>v.IdRegion===11)),
  new Region(12, 'CAMPANIA', 'backgrounds/Italia.jpg', 'regions/Campania.png', areas.filter(v=>v.IdRegion===12)),
  new Region(13, 'LOMBARDIA', 'backgrounds/Italia.jpg', 'regions/Lombardia.png', areas.filter(v=>v.IdRegion===13))

];
const managers = [
  new Manager(1, 'Maurizio', 'Contino', 'Area manager', 1, 'avatars/male-04.jpg', 'backgrounds/14-640x480.jpg'),
  new Manager(2, 'Davide', 'Contino', 'Regional manager', 3, 'avatars/male-04.jpg', 'backgrounds/19-640x480.jpg'),
  new Manager(3, 'Elena', 'Masotti', 'Area manager', 4, 'avatars/female-06.jpg', 'backgrounds/34-640x480.jpg',)
];

  const monitors = [
    new MonitorItem(1, 'Aperte'),
    new MonitorItem(2, 'ToolBox_Aperte'),
    new MonitorItem(3, 'Sepa_aperte'),
    new MonitorItem(4, 'Business'),
    new MonitorItem(5, 'Sepa_Business'),
    new MonitorItem(6, 'NonOperative'),
    new MonitorItem(7, 'Sepa_non_operative'),
    new MonitorItem(8, 'Pross_apertura'),
    new MonitorItem(9, 'Toolbox_pa'),
    new MonitorItem(10, 'Sepa_pa'),
    new MonitorItem(11, 'Sepa_Attivi'),
    new MonitorItem(12, 'Toolbox_Attivi')

  ];
  const results = [

  new MonitorResultItem(1, 1,'Aperte', 1, 2023, 1, 12),
  new MonitorResultItem(2, 2, 'ToolBox_Aperte', 1, 2023, 1, 10),
  new MonitorResultItem(3, 3, 'Sepa_aperte', 1, 2023, 1, 10),
  new MonitorResultItem(4, 4, 'Business', 1, 2023, 1, 2),
  new MonitorResultItem(5, 5, 'Sepa_Business', 1, 2023, 1, 1),
  new MonitorResultItem(6, 6, 'NonOperative', 1, 2023, 1, 0),
  new MonitorResultItem(7, 7, 'Sepa_non_operative', 1, 2023, 1, 1),
  new MonitorResultItem(8, 8, 'Pross_apertura', 1, 2023, 1, 4),
  new MonitorResultItem(9, 9, 'Toolbox_pa', 1, 2023, 1, 2),
  new MonitorResultItem(10, 10, 'Sepa_pa', 1, 2023, 1, 0),
  new MonitorResultItem(11, 11, 'Sepa_Attivi', 1, 2023, 1, 14),
  new MonitorResultItem(12, 12, 'Toolbox_Attivi', 1, 2023, 1, 2)
  ]

export const dbConfig: DBConfig = {
  name: 'test',
  version: 1,
  stores: [
    {
      name: 'Aree',
      key:  'Id',
    },
    {
      name: 'Monitors',
      key:  'Id',
    },
    {
      name: 'MonitorResultItem',
      key:  'Id',
    },
    {
      name: 'Dashboards',
      key:  'Id',
    },
    {
    name: 'Regions',
    key:  'Id',
    substores:[{
      name: 'Areas',
      key:  'Id',
      join: 'IdRegion'
    },

  ],

  },
  {
    name: 'Managers',
    key:  'Id'
  },
  {
    name: 'Dashboards',
    key:  'Id'
  }],
  Prefill:{
    Regions: regions,
    Managers: managers,
    Aree: areas,
    Monitors: monitors,
    MonitorResultItem: results
  }

};
