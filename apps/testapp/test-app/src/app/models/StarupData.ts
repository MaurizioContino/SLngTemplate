import { DashboardWidget } from "@soloud/sldashboard"
import { operator, ValueType } from "@soloud/SlDataSource"
import { menuitem } from "@soloud/slmenu"
import { ItemValueComponent } from "../controls/item-value/item-value.component"

export const allmenus = [
  {itemtype:"title", title: 'Dataentry', subtitle:'Insert new data', children:[], url: ''},
  {itemtype:"link", title: 'Weekly results', url: 'WeekResults'},
  {itemtype:"title", title: 'Configurations', subtitle:'Application base configuration', children:[], url: ''},
  {itemtype:"link", title: 'Managers', url: 'configs/managers'},
  {itemtype:"link", title: 'Regions', url: 'configs/regions'},
  {itemtype:"link", title: 'Dashboards', url: 'configs/dashboards'}

] as menuitem[]
export const top = [{itemtype:"title", title: 'Dashboards', subtitle:'Application dashboards', children:[], url: ''}] as menuitem[]
export const logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/100px-Angular_full_color_logo.svg.png"

export const DashWidgetsConf: DashboardWidget[] = [
  ItemValueComponent.Definition
]
