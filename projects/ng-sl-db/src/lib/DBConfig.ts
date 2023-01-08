import { Injectable, InjectionToken } from "@angular/core";

export interface objectSubStore {
  name: string;
  key: string;
  join: string
  substores?: objectSubStore[] | undefined
}


export interface objectStore {
  name: string;
  key: string;
  substores?: objectSubStore[] | undefined

}


export interface DBConfig {

  name: string;
  version: number;
  stores : objectStore[];
  Prefill: any;

}

export const DB_CONFIG = new InjectionToken<DBConfig | null>('DB_CONFIG');


