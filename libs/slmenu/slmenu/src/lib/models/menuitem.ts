export interface menuitem {
  itemtype: 'link' | 'parent' | 'title'
  title: string;
  subtitle?: string;
  icon?: string;
  url?: string;
  children?: menuitem[];

}
