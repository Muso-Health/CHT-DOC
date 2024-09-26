import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-form-action',
  templateUrl: './form-action.component.html',
  styleUrl: './form-action.component.css'
})
export class FormActionComponent implements OnInit {
  @Input()
  actionType: string = '';
  action: any = {title:"", short:"", icon:""}

  ngOnInit(): void {
    this.action = this._mapToAction(this.actionType);
  }
  private _mapToAction(actionType: string): any {
    switch (actionType) {
      case 'ACTION':
        return {
          title: 'Le formulaire est déclenché à partir du menu nouvelle action du CHT',
          short: 'ACTION',
          icon: "assignment_add"
        };
      case 'TASK':
        return {
          title: 'Le formulaire est déclenché en cliquant sur une tâche du CHT',
          short: 'TACHE',
          icon: "flag"
        };
      default:
        return {
          title: 'Le formulaire peut se déclencher à partir du menu nouvelle action du CHT ou en cliquant sur une tâche',
          short: 'MIXTE',
          icon: "dynamic_form"
        };

    }
  }

}
