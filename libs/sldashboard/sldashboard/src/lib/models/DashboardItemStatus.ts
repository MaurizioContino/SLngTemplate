import { DashboardItem } from "./DashboardItem"

export interface DashboardItemStatus {
  status: 'view' | 'config' | 'select'
  config: DashboardItem | undefined
}
