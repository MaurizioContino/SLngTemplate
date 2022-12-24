import { layoutsection } from "./layoutsection";

export interface layout {
  sections: layoutsection[];
}

export const layoutModels: any = new Map([
  ['XSmall',
  {sections : [
    {name: 'left', width: '300px', sizing: 'fixed', collapsible: true, collapsed: true },
    {name: 'mainleft', sizing: 'extend' },
    {name: 'mainright', sizing: 'fullcontainer', collapsible: true, collapsed: true, view: 'popup' },
    {name: 'right', width: '300px', collapsible: true, collapsed: true,view: 'none' }
  ]}],
  ['Small',
  {sections : [
    {name: 'left', width: '300px', sizing: 'fixed', collapsible: true, collapsed: true },
    {name: 'mainleft', sizing: 'extend' },
    {name: 'mainright', width: '300px', collapsible: true, collapsed: true, view: 'popup' },
    {name: 'right', width: '300px', collapsible: true, collapsed: true,view: 'none' }
  ]}],
  ['Medium',
  {sections : [
    {name: 'left', width: '300px',sizing: 'fixed' },
    {name: 'mainleft', sizing: 'extend' },
    {name: 'mainright', sizing: 'fullcontainer', collapsible: true, collapsed: true, view: 'popup' },
    {name: 'right', sizing: 'fixed', width: '300px', collapsible: true, collapsed: true }
  ]}],
  ['Large', {sections : [
    {name: 'left', width: '300px',sizing: 'fixed' },
    {name: 'mainleft', sizing: 'extend' },
    {name: 'mainright', width: '300px', collapsible: true, collapsed: true },
    {name: 'right',sizing: 'fixed', width: '300px', collapsible: true, collapsed: true }
  ]}],
  ['XLarge', {sections : [
    {name: 'left', width: '300px',sizing: 'fixed' },
    {name: 'mainleft', sizing: 'extend' },
    {name: 'mainright', sizing: 'extend', collapsible: true, collapsed: false },
    {name: 'right',sizing: 'fixed', width: '300px', collapsible: true, collapsed: false }
  ]}],
]);



