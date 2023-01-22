import { filterItem } from "@soloud/SlDb";


export class EndpointConfig  {

  name: string;
  url: string
  verb: string;
  storeMap: string;
  filters: filterItem[] = []

  constructor(name: string,verb: string, url: string, storeMap: string) {
    this.name = name;
    this.url = url;
    this.verb = verb;
    this.storeMap = storeMap;
  }

}
