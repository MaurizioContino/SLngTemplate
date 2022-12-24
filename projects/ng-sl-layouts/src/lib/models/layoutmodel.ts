import { layoutsection } from "./layoutsection";

export interface layout {
  sections: layoutsection[];
}

export const layoutModels: any = new Map([
  ['XSmall',
  {sections : [
    {name: 'top', sizing: 'extend', view: 'inline' },
    {name: 'left', width: '300px', sizing: 'fixed', collapsible: true, collapsed: true, view: 'inline' },
    {name: 'mainleft', sizing: 'extend', view: 'inline' },
    {name: 'mainright', sizing: 'fullcontainer',  view: 'popup' },
    {name: 'right', width: '300px', collapsible: true, collapsed: true,view: 'none' }
  ]}],
  ['Small',
  {sections : [
    {name: 'top', sizing: 'extend', view: 'inline' },
    {name: 'left', width: '300px', sizing: 'fixed', collapsible: true, collapsed: true, view: 'inline' },
    {name: 'mainleft', sizing: 'extend', view: 'inline' },
    {name: 'mainright', width: '300px', view: 'popup' },
    {name: 'right', width: '300px', collapsible: true, collapsed: true,view: 'none' }
  ]}],
  ['Medium',
  {sections : [
    {name: 'top', sizing: 'extend', view: 'inline' },
    {name: 'left', width: '300px',sizing: 'fixed', view: 'inline' },
    {name: 'mainleft', sizing: 'extend', view: 'inline' },
    {name: 'mainright', sizing: 'fullcontainer', view: 'popup' },
    {name: 'right', sizing: 'fixed', width: '300px', collapsible: true, collapsed: true, view: 'inline'}
  ]}],
  ['Large', {sections : [
    {name: 'top', sizing: 'extend', view: 'inline' },
    {name: 'left', width: '300px',sizing: 'fixed', view: 'inline' },
    {name: 'mainleft', sizing: 'extend', view: 'inline' },
    {name: 'mainright', width: '300px', collapsible: true, collapsed: true, view: 'inline' },
    {name: 'right',sizing: 'fixed', width: '300px', collapsible: true, collapsed: true, view: 'inline' }
  ]}],
  ['XLarge', {sections : [
    {name: 'top', sizing: 'extend', view: 'inline' },
    {name: 'left', width: '300px',sizing: 'fixed', view: 'inline' },
    {name: 'mainleft', sizing: 'extend', view: 'inline' },
    {name: 'mainright', sizing: 'extend', collapsible: true, collapsed: false, view: 'inline' },
    {name: 'right',sizing: 'fixed', width: '300px', collapsible: true, collapsed: false, view: 'inline' }
  ]}],
]);



