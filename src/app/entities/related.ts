import {MaliString} from "./mali-string";
import {EMPTY_MALI_TITLE} from "./form";

export interface Related {
  objectType: string;
  url: string;
  icon: string;
  id: number;
  name: string;
  title: MaliString;
  reported: number;
}
export const SAMPLE_RELATED = {
  objectType: "tasks",
  url: "http://127.0.0.1:8000/record",
  icon: "bubble_chart",
  id: 8000,
  name: "Related Record",
  title:EMPTY_MALI_TITLE,
  reported: 50,
}
export const VACCINATION_PROTOCOLE = {
  objectType: "protocols",
  url: "/protocols/4",
  icon: "health_and_safety",
  id: 4,
  name: "VACCINATION",
  title:{"en":"vaccination","bm":"VACCINATION","fr":"Vaccination"},
  reported: 50,
}
export const FOLLOWUP_PROTOCOLE = {
  objectType: "protocols",
  url: "/protocols/5",
  icon: "flag",
  id: 5,
  name: "FOLLOWUP",
  title:{"en":"follow-up","bm":"FOLLOWUP","fr":"Suivi Traitement"},
  reported: 50,
}
