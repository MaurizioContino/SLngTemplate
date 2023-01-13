// import { HttpClient } from "@angular/common/http"
// import { Observable, Subject } from "rxjs"

// export enum ChartTypes {
//   Table = 'Table',
//   BarChart = 'BarChart',
//   BarChartStacked = 'BarChartStacked',
//   LineChart = 'LineChart',
//   LineChartStacked = 'LineChartStacked',

//   Gauge = 'Gauge',
//   TimeLineChart = 'TimeLineChart',
//   PieChart = 'PieChart',
//   RadialChart = 'RadialChart',
// }

// export enum ChartVariablesDefault {
//   TodayUTC = '@TodayUTC',
//   NowUTC = '@NowUTC',
//   Today = '@Today',
//   Now = '@Now',
//   Month = '@Month',
//   Year = '@Year',
//   First = '@First',
//   Last = '@Last',
//   Min = '@Min',
//   Max = '@Max',
// }

// export enum ChartVariablesValue {
//   Date = '@Date',
//   GateId = '@GateId',
// }

// export enum FieldType {
//   Automatic = 'Automatic',
//   String = 'String',
//   Integer = 'Integer',
//   Number = 'Number',
//   Boolean = 'Boolean',
//   Percentage = 'Percentage',
//   Currency = 'Currency',
//   DateTime = 'DateTime',
//   Date = 'Date',
//   Time = 'Time',
// }
// export class ViewerField {
//   public idx?: number
//   public Field?: string
//   public Value?: string
//   public Default?: string
//   public Type?: FieldType
//   public Header?: string
//   public Visible?: boolean
//   public Format?: string
//   public Expanded?: boolean
//   public Function?: string
// }

// export class ViewerFilter extends ViewerField { }

// export class ViewerGroupBy extends ViewerField {
//   public Pattern?: string
// }

// export class ViewerGroupResult extends ViewerField {

//   public SplitOf?: string
// }

// export class Transform {
//   public Filter: ViewerFilter[] = []
//   public GroupBy: ViewerGroupBy[] = []
//   public GroupResult: ViewerGroupResult[] = []
// }

// export class DashboardDataSource {
//   public DataSourceType: 'API (Internal)' | 'API (External)' | 'Store procedure' | 'Query'
//   public DataSourceParameters: any
//   public ProcParameters: ViewerFilter[] = []
//   public Name: string
//   public IdData?: number
//   public CacheSec?: 120
//   public Query: string = ''
//   private http: HttpClient

//   public Columns: ViewerField[] = []
//   public ExternalParameters?= null;
//   //public viewerTransform? : Transform = new Transform();
//   cfg: any;

//   constructor(http: HttpClient, data: any = null, ExternalParameters: any = null) {
//       this.http = http
//       this.ExternalParameters = ExternalParameters;
//       //this.cfg = cfg
//       if (data !== null) {
//           this.DataSourceType = data.DataSourceType
//           this.DataSourceParameters = data.DataSourceParameters
//           this.Name = data.Name ? data.Name : 'New datasource'
//           this.Columns = data.Columns
//           this.IdData = data.IdData
//           this.CacheSec = data.CacheSec
//           this.Query = data.Query
//           this.ProcParameters = ExternalParameters ? this.GetParametersFromExternal() : (data.ProcParameters ? data.ProcParameters : [])
//           //this.viewerTransform = data.viewerTransform ? data.viewerTransform : new Transform();
//       } else {
//           this.Name = 'New datasource'
//           this.DataSourceType = 'API (Internal)'
//           this.initParameters()
//       }
//   }
//   getSerializer() {
//       return JSON.stringify({
//           DataSourceType: this.DataSourceType,
//           DataSourceParameters: this.DataSourceParameters,
//           Name: this.Name,
//           Columns: this.Columns,
//           IdData: this.IdData,
//           CacheSec: this.CacheSec,
//           Query: this.Query,
//           ProcParameters: this.ExternalParameters ? this.GetParametersFromExternal() : this.ProcParameters,

//           //Filters: this.viewerTransform
//       })
//   }

//   GetParametersFromExternal() {
//       if (this.ExternalParameters) {
//           return Object.keys(this.ExternalParameters).map(k => { return { Field: k, Value: this.ExternalParameters![k] } })
//       }
//       else {
//           return null;
//       }
//   }

//   initParameters() {
//       switch (this.DataSourceType) {
//           case 'API (Internal)':
//               this.setApiInternalParameters()
//               break
//           case 'API (External)':
//               this.setApiExternalParameters()
//               break
//           case 'Store procedure':
//               this.setStoreParameters()
//               break
//           case 'Query':
//               this.setQueryParameters()
//               break
//       }
//   }

//   setApiInternalParameters() {
//       this.DataSourceParameters = {
//           method: 'get',
//           querystring: '',
//           body: '',
//           url: '',
//           Fields: [],
//       }
//   }

//   setApiExternalParameters() {
//       this.DataSourceParameters = {
//           method: 'get',
//           querystring: '',
//           body: {},
//           url: '',
//           authtoken: '',
//           getTokenUrl: '',
//           Fields: [],
//       }
//   }

//   setStoreParameters() {
//       this.DataSourceParameters = {
//           IdProcedure: -1,
//           parameters: this.ExternalParameters ? this.GetParametersFromExternal() : this.ProcParameters,
//           Fields: [],
//           Query: '',
//       }
//   }
//   setQueryParameters() {
//       this.DataSourceParameters = {
//           query: '',
//           parameters: {},
//           Fields: [],
//       }
//   }

//   private ExecuteReaderApiInternal() {
//       const ret = new Subject<any[]>()
//       if (this.DataSourceParameters.url) {
//           //let url = this.cfg.DashServiceUrl + this.DataSourceParameters.url + this.DataSourceParameters.querystring;
//           let url = this.cfg.DashServiceUrl + this.DataSourceParameters.url

//           if (this.DataSourceParameters.method == 'post')
//               this.http.post<any[]>(url, JSON.parse(this.DataSourceParameters.body)).subscribe((v: any) => {
//                   ret.next(v.Payload)
//               })
//           if (this.DataSourceParameters.method == 'get')
//               this.http.get<any[]>(url).subscribe((v: any) => {
//                   ret.next(v.Payload)
//               })
//       }
//       return ret
//   }
//   private ExecuteSp(Groups: ViewerField[], Values: ViewerField[], test: boolean, filterRequired: boolean) {
//       const ret = new Subject<any[]>()
//       if (test) {
//           const body = {
//               IdData: -1,
//               CacheSec: 1,
//               Query: this.getSerializer(),

//           }

//           if (filterRequired && body.Query == null) {

//           } else {
//               this.http.post(this.cfg.DashServiceUrl + '/DashboardData/TestDataSource', body).subscribe((v: any) => {
//                   ret.next(v.Payload)
//               })
//           }

//       } else {
//           const body = {
//               IdProcedure: this.IdData,
//               //Parameters: { UserId: 2 }, //this.DataSourceParameters,
//               //Transform: null, //this.viewerTransform, Non funziona un cazzo dei filtri post query, disabilito tutto e i filtri si faranno in query
//               ObjectType: 'Table',
//               ExternalParameters: this.ExternalParameters ? this.ExternalParameters : null,
//               Transform: { GroupBy: Groups, GroupResult: Values }
//           }
//           if (filterRequired && body.ExternalParameters == null) {

//           } else {
//               this.http.post(this.cfg.DashServiceUrl + '/DashboardData/GetSpDataSingleObject', body).subscribe((v: any) => {
//                   ret.next(v.Payload)
//               })
//           }

//       }
//       return ret
//   }

//   public ReadData(Groups: ViewerField[], Values: ViewerField[], OverrideColumns: boolean, filterRequired: boolean) {

//       const ret = new Subject<any[]>()

//       let localsubj: Observable<any[]> | null = null
//       const group = (Groups && Groups.length > 0) || (Values && Values.length > 0)
//       localsubj = this.GetDsTypeSubject(this.DataSourceType, Groups, Values, false, filterRequired)

//       this.LoadData(localsubj, group, OverrideColumns).subscribe((v) => {
//           ret.next(v)
//       })

//       return ret
//   }

//   public TestDataSource(FilterRequired: boolean) {
//       const ret = new Subject<any[]>()
//       let localsubj: Observable<any[]> | null= null

//       localsubj = this.GetDsTypeSubject(this.DataSourceType, [], [], true, FilterRequired)
//       this.LoadData(localsubj, false, true).subscribe((v) => {
//           ret.next(v)
//       })
//       return ret
//   }

//   private LoadData(localsubj: any, group: boolean, reloadColumns: boolean): Observable<any[]> {
//       const ret = new Subject<any[]>()

//       localsubj.subscribe((v: any) => {
//           if (reloadColumns) this.Columns = []
//           let idx = -1
//           // Ho due tipi di dati restituiti, una lista di oggetti (API) e una table con le colonne (Store procedures)
//           if (v && v.columns) {
//               // Table + column
//               if (this.Columns.length == 0) {
//                   this.Columns = Object.keys(v.columns).map(
//                       (k) =>
//                       ({
//                           idx: ++idx,
//                           Field: k,
//                           Header: k,
//                           Visible: true,
//                           Type: v.columns[k],
//                           Format: '',
//                           Expanded: false,
//                       } as ViewerField)
//                   )
//               }

//               const retdata: any[] = []

//               v.data.Table.forEach((element: any) => {
//                   let tmpVal:any = {}
//                   let idx = 0;
//                   Object.keys(v.columns).forEach(dc => {
//                       tmpVal[dc] = element.ItemArray[idx]
//                       idx++;
//                   });
//                   retdata.push(tmpVal)
//               })
//               ret.next(retdata)
//           } else {
//               // Lista oggetti
//               if (this.Columns.length == 0 && v) {
//                   this.Columns = Object.keys(v[0]).map(
//                       (k) =>
//                       ({
//                           idx: ++idx,
//                           Field: k,
//                           Header: k,
//                           Visible: true,
//                           Type: FieldType.String,
//                           Format: '',
//                           Expanded: false,
//                       } as ViewerField)
//                   )
//               }
//               ret.next(v)
//           }
//       })
//       return ret
//   }

//   private GetDsTypeSubject(DataSourceType: string, Groups: ViewerField[], Values: ViewerField[], test: boolean, filterRequired: boolean) {
//       switch (DataSourceType) {
//           case 'API (Internal)':
//               return this.ExecuteReaderApiInternal()
//               break
//           case 'API (External)':
//               //return this.ExecuteReaderApiInternal();
//               throw 'Not implemented'
//               break
//           case 'Store procedure':
//               return this.ExecuteSp(Groups, Values, test, filterRequired);
//               break
//           case 'Query':
//               throw 'Not implemented'

//               break
//           default:
//               throw 'Not implemented'
//               break
//       }
//   }


//   public SaveDataSource() {
//       const item = {
//           IdData: this.IdData,
//           Query: this.getSerializer(),
//           CacheSec: this.CacheSec
//       }

//       const ret = new Subject<any>();
//       this.http.post<any>(this.cfg.DashServiceUrl + `/DashboardData`, item).subscribe(v => {
//           if (!v.HasErrors) {
//               ret.next(
//                   {
//                       IdData: v.Payload.IdData,
//                       ds: new DashboardDataSource(this.http, JSON.parse(v.Payload.Query), this.ExternalParameters),
//                       CacheSec: v.Payload.CacheSec
//                   }
//               );
//           }
//           else {
//               ret.next(v.Error.Message);
//           }
//       });
//       return ret;
//   }

// }

// export class DashboardItem {
//   public DashboardDataSourceId: number = 0
//   public DashboardDataSource: DashboardDataSource | null = null;
//   public ViewerType: ChartTypes
//   //public ViewerMappings: any
//   public Labels?: any
//   public Legend?: Boolean = true
//   public Title: string = ''
//   public Description: string = ''
//   public SubDescription: string = ''

//   public LabelX?: string
//   public LabelY?: string
//   public SumValueField?: ViewerField;
//   public SumTotalField?: ViewerField;
//   public Groups?: ViewerField[] = []
//   public Values?: ViewerField[] = []

//   constructor(data: DashboardItem | null = null) {
//       if (data) {
//           this.DashboardDataSourceId = data.DashboardDataSourceId
//           this.DashboardDataSource = data.DashboardDataSource
//           this.ViewerType = data.ViewerType
//           this.LabelX = data.LabelX
//           this.LabelY = data.LabelY
//           this.Labels = data.Labels
//           this.SumTotalField = data.SumTotalField
//           this.SumValueField = data.SumValueField
//           this.Title = data.Title
//           this.Description = data.Description;
//           this.SubDescription = data.SubDescription;
//           this.Groups = data.Groups;
//           this.Values = data.Values;
//       } else {
//           this.ViewerType = ChartTypes.Table

//           //this.ViewerMappings = {}
//           this.Labels = {}
//       }
//   }

//   private ExecuteReaderApiExternal() {
//       alert('Not implemented')
//   }

//   private ExecuteQuery() {
//       alert('Not implemented')
//   }

//   public ReadData(Groups: ViewerField[], Values: ViewerField[], OverrideColumns: boolean, filterRequired: boolean) {
//       if (this.DashboardDataSource)
//       return this.DashboardDataSource.ReadData(Groups, Values, OverrideColumns, filterRequired)
//       else
//       return null;
//   }
// }
