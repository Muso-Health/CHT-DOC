import {Component, Input, OnInit} from '@angular/core';
import {EMPTY_FORM, Form} from "../../entities/form";
import {TableRow} from "../../entities/table-row";

@Component({
  selector: 'app-form-table',
  templateUrl: './form-table.component.html',
  styleUrl: './form-table.component.css'
})
export class FormTableComponent implements OnInit {
  readonly excel: string = 'excel.png';
  @Input()
  form: Form = EMPTY_FORM;
  @Input()
  properties: string[] = [];

  rows: TableRow[] =  [];
  displayedColumns: string[] = ['header','value']

  ngOnInit(): void {
    this.rows = this._formToRows(this.form);
  }
  private _formatValue(header: string, value: any ): string {
    switch (header) {
      case "title":
        return value.fr;
      default:
        return value;

    }
  }
  private _formToRows(form: Form): TableRow[] {
    const k = Object.keys(form);
    const v = Object.values(form);
    const rows: TableRow[] = [];
    k.forEach((k, index) => {
      if (this.properties.length==0 || this.properties.includes(k)) {
        rows.push({
          header: k,
          header_fr: this._mapToFr(k),
          header_tooltip: this._headerTooltip(k),
          icon:  this._mapToMatIcon(k),
          isLink: ['name', 'xlsx'].includes(k),
          link: k=='name'?'/forms/' + form.id:'https://github.com/medic/config-muso/blob/master/muso-mali/forms/app/' + form.xlsx,
          value: this._formatValue(k, v[index])
        });
      }
    });
    return rows
  }
  private _mapToFr(key: string): string {
    switch (key) {
      case "name":
        return "ID";
      case "xlsx":
        return "XLS";
      case "title":
        return "Titre";
      case "protocols":
        return "Protocoles";
      case "tasks":
        return "tâches";
      case "oldVersions":
        return "Autres versions";
      case "triggerType":
        return "Déclenché par";
      case "actors":
        return "Actors";
      case "targets":
        return "Targets";
      default:
        return key;
    }
  }
  private _headerTooltip(key: string): string {
    switch (key) {
      case "name":
        return "Identifiant";
      case "xlsx":
        return "Fichier XLS et historiques";
      case "title":
        return "Nom du formulaire pour les utilisateurs en français";
      case "protocols":
        return "Protocoles dont le formulaire est impliqué ";
      case "tasks":
        return "tâches qui déclenchent le formulaire";
      case "oldVersions":
        return "Autres versions";
      case "triggerType":
        return "ACTION: l'asc déclenche le formulaire en selectionant un contact et cliquant sur le menu action, TACHE: L'asc fait click sur une tâche pour déclencher le formulaire, MIXTE: les deux options sont possibles";
      case "actors":
        return "Utilisateurs avec accès aux formulaires";
      case "targets":
        return "Contact sur lequel le formulaire collecte les informations";
      default:
        return key;
    }
  }
  private _mapToMatIcon(key: string): string {
    switch (key) {
      case "title":
        return "assignment";
      case "xlsx":
        return "download";
      case "protocols":
        return "health_and_safety";
      case "tasks":
        return "flag";
      case "oldVersions":
        return "assignment";
      case "triggerType":
        return "bolt";
      case "targets":
        return "person";
      case "actors":
        return "face_3";
      default:
        return "bubble_chart";
    }
  }
}
