import { IDashboardItem } from "./DashboardItem"

export interface DashboardItemStatus {
  status: 'view' | 'config' | 'select'
  config: IDashboardItem | undefined
}
