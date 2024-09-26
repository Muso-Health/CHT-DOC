import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {EX_01_FORM, EX_02_FORM, EX_03_FORM, Form} from "../../entities/form";
import {TriggerType} from "../../entities/trigger-type";
import {MatSelectChange} from "@angular/material/select";
import {FOLLOWUP_PROTOCOLE, Related, VACCINATION_PROTOCOLE} from "../../entities/related";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent  implements OnInit  {
  cols: number = 3;
  gridHeight: string = '450px'
  forms: Form[] = [EX_01_FORM, EX_02_FORM, EX_03_FORM];
  filteredForms: Form[] = [];
  filteredActionForms: Form[] = [];
  filteredTaskForms: Form[] = [];
  filteredMixedForms: Form[] = [];
  properties: string[] = ["name", "title", "protocols","xlsx", "triggerType", "actors", "targets"];
  private _protocol: string = 'all';
  private _deployed: string = 'all';
  protocols: Related[] = [];
  appForms: number = this.forms.length;
  filteredAppForms: number = this.filteredForms.length;


  constructor(private responsive: BreakpointObserver) {
  }

  protocolChanged(event: MatSelectChange) {
    this._protocol = event.value;
    if (this.forms && event) {
      if (this._protocol !== 'all') {
        this.filteredForms = this.forms.filter((form: Form) =>
          form.protocols.map(p => p.id).includes(parseInt(this._protocol))
        );
        if (this._deployed !== 'all') {
          this.filteredForms = this.filteredForms.filter((form: Form) => form.deployed = this._deployed === 'yes' );
        }

      }
      else {
        if (this._deployed !== 'all') {
          this.filteredForms = this.forms.filter((form: Form) => form.deployed = this._deployed === 'yes' );
        }
        else
          this.filteredForms = this.forms.slice();
      }
      this._updateProtocolLists();
      this._updateMetrics(TriggerType.ALL);
    }
  }
  deployChanged(event: MatSelectChange) {
    if (this.forms && event) {
      this._deployed = event.value;
      if (this._deployed !== 'all') {
        this.filteredForms = this.forms.filter((form: Form) => form.deployed = this._deployed === 'yes');
        if (this._protocol !== 'all') {
          this.filteredForms = this.filteredForms.filter((form: Form) =>
            form.protocols.map(p => p.id).includes(parseInt(this._protocol))
          );
        }
      }
      else {
        if (this._protocol !== 'all') {
            this.filteredForms = this.forms.filter((form: Form) =>
            form.protocols.map(p => p.id).includes(parseInt(this._protocol))
          );
        }
        else
          this.filteredForms = this.forms.slice();
      }
      this._updateProtocolLists();
      this._updateMetrics(TriggerType.ALL);
    }
  }
  triggerTypeChanged(tabIndex: number) {
    switch (tabIndex) {
      case 0:
        this._updateMetrics(TriggerType.ALL);
        break;
      case 1:
        this._updateMetrics(TriggerType.ACTION);
        break;
      case 2:
        this._updateMetrics(TriggerType.TASK);
        break;
      case 3:
        this._updateMetrics(TriggerType.MIXED);
        break;
    }
  }
  ngOnInit(): void {
    this.protocols = [VACCINATION_PROTOCOLE, FOLLOWUP_PROTOCOLE];
    this._updateProtocolLists();
    this._updateMetrics(TriggerType.ALL);
    this._reSize();
  }
  private _updateMetrics(triggerType: TriggerType) {
    switch (triggerType) {
      case TriggerType.ALL:
        this.appForms = this.forms.length;
        this.filteredAppForms = this.filteredForms.length;
        break;
      case TriggerType.ACTION:
        this.appForms = this.forms.length;
        this.filteredAppForms = this.filteredActionForms.length;
        break;
      case TriggerType.TASK:
        this.appForms = this.forms.length;
        this.filteredAppForms = this.filteredTaskForms.length;
        break;
        case TriggerType.MIXED:
          this.appForms = this.forms.length;
          this.filteredAppForms = this.filteredMixedForms.length;
          break;
    }
  }
  private _updateProtocolLists() {
    this.filteredActionForms = this.filteredForms.filter(form  => form.triggerType === TriggerType.ACTION);
    this.filteredTaskForms = this.filteredForms.filter(form  => form.triggerType === TriggerType.TASK);
    this.filteredMixedForms = this.filteredForms.filter(form  => form.triggerType === TriggerType.MIXED);
  }
  private _reSize(): void {
    this.responsive.observe(
      [
        Breakpoints.HandsetPortrait,
        Breakpoints.HandsetLandscape,
        Breakpoints.TabletPortrait,
        Breakpoints.TabletLandscape
      ]
    )
      .subscribe(result => {
        this.cols = 3
        this.gridHeight = '450px'
        const breakpoints = result.breakpoints
        if (breakpoints[Breakpoints.HandsetPortrait]) {
          this.cols = 1
          this.gridHeight = '450px'
        }
        else if (breakpoints[Breakpoints.HandsetLandscape]) {
          this.cols = 1
        }
        else if (breakpoints[Breakpoints.TabletPortrait]) {
          this.cols = 1
        }
        else if (breakpoints[Breakpoints.TabletLandscape]) {
          this.cols = 2
        }
      })
  }
}
