import {MaliString} from "./mali-string";
import {Related} from "./related";
import {Actor} from "./actor";
import {Target} from "./target";
import {Place} from "./place";

export interface Task {
  id: number;
  name: string;
  title: MaliString;
  protocols: Related[];
  sourceForm: Related;
  actionForm: Related;
  oldVersion: Related[];
  actors: Actor[];
  targets: Target[];
  description: string;
  eventNumber:  number;
  dueDates: string;
  start: number;
  end: number;
  appliesIf: string;
  appliesTo: string;
  appliesToType: string;
  displayForUserAt:  Place;


}
