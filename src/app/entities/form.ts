import {MaliString} from "./mali-string";
import {FOLLOWUP_PROTOCOLE, Related, SAMPLE_RELATED, VACCINATION_PROTOCOLE} from "./related";
import {Actor} from "./actor";
import {Target} from "./target";
import {TriggerType} from "./trigger-type";
import {ChtFormType} from "./cht-form-type";

export interface Form {
  id: number;
  deployed: boolean;
  chtFormType: ChtFormType;
  versionSHA256: string;
  versionTimeStamp: number;
  name: string;
  xlsx: string;
  lastCommit?: string;
  title: MaliString;
  protocols: Related[];
  tasks: Related[];
  oldVersions: Related[];
  triggerType: TriggerType;
  actionContext: string;
  triggerDescription: string;
  actors: Actor[];
  targets: Target[];
  dataRecords:number;
  repeatGroups: number;
  description: string;
  icon: string;

}
export const EMPTY_MALI_TITLE: MaliString = {
  fr:"Protocolo de mierda",
  en:"",
  bm:""
}
export const EMPTY_FORM: Form = {
  id: 0,
  deployed: true,
  chtFormType: ChtFormType.APP,
  versionSHA256: "",
  versionTimeStamp: 0,
  name: "",
  xlsx:"",
  title: EMPTY_MALI_TITLE,
  protocols: [],
  tasks: [],
  oldVersions: [],
  triggerType: TriggerType.ACTION,
  actionContext: "",
  triggerDescription: "",
  actors: [],
  targets: [],
  dataRecords: 0,
  repeatGroups: 0,
  description: "",
  icon:""
}
export const EX_01_FORM: Form = {
  id: 1,
  deployed: true,
  chtFormType: ChtFormType.APP,
  versionSHA256: "qs",
  versionTimeStamp: 7,
  name: "pma",
  xlsx: "",
  title: EMPTY_MALI_TITLE,
  protocols: [FOLLOWUP_PROTOCOLE, VACCINATION_PROTOCOLE],
  tasks: [SAMPLE_RELATED],
  oldVersions: [SAMPLE_RELATED],
  triggerType: TriggerType.MIXED,
  actionContext: "",
  triggerDescription: "",
  actors: [Actor.CHW],
  targets: [Target.CHILD_LESS_5],
  dataRecords: 0,
  repeatGroups: 0,
  description: "",
  icon:""
}
export const EX_02_FORM: Form = {
  id: 2,
  deployed: true,
  chtFormType: ChtFormType.APP,
  versionSHA256: "vqs",
  versionTimeStamp: 5,
  name: "CHILDREN_VACCINATION",
  xlsx: "children_vaccination.xlsx",
  title: {
    en:"",
    bm:"",
    fr:"Vérification état vaccinal"
  },
  protocols: [VACCINATION_PROTOCOLE],
  tasks: [SAMPLE_RELATED],
  oldVersions: [SAMPLE_RELATED],
  triggerType: TriggerType.ACTION,
  actionContext: "((contact.type === 'person' || contact.contact_type === 'person') && (user.parent.type === 'health_center' || user.parent.contact_type === 'c40_chw_area') && (!contact.date_of_birth || ageInMonths(contact) < 24)) && !summary.muted && user.is_active && summary.alive && !summary.is_enrolled_in_vacc_program",
  triggerDescription: "qsdqsd",
  actors: [Actor.CHW, Actor.SV, Actor.SM],
  targets: [Target.CHW_AREA, Target.SM],
  dataRecords: 0,
  repeatGroups: 0,
  description: "",
  icon:""
}
export const EX_03_FORM: Form = {
  id: 2,
  deployed: false,
  chtFormType: ChtFormType.APP,
  versionSHA256: "vqs",
  versionTimeStamp: 5,
  name: "TREATMENT_FOLLOWUP_OVER_5",
  xlsx: "treatment_followup.xlsx",
  title: {
    en:"",
    bm:"",
    fr:"Suivi Traitement Adultes"
  },
  protocols: [FOLLOWUP_PROTOCOLE],
  tasks: [SAMPLE_RELATED],
  oldVersions: [SAMPLE_RELATED],
  triggerType: TriggerType.TASK,
  actionContext: "((contact.type === 'person' || contact.contact_type === 'person') && (user.parent.type === 'health_center' || user.parent.contact_type === 'c40_chw_area') && (!contact.date_of_birth || ageInMonths(contact) < 24)) && !summary.muted && user.is_active && summary.alive && !summary.is_enrolled_in_vacc_program",
  triggerDescription: "ici nous voulons des explications narratives",
  actors: [Actor.CHW],
  targets: [Target.CHILD_MORE_5],
  dataRecords: 0,
  repeatGroups: 2,
  description: "",
  icon:""
}


