import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-target-list',
  templateUrl: './target-list.component.html',
  styleUrl: './target-list.component.css'
})
export class TargetListComponent implements OnInit {
  @Input()
  targets: string[] = [];
  objTargets: any[] = [];
  icon: string = "bubble_chart";
  title: string = "";
  ngOnInit(): void {
    this.objTargets = this._mapTargets(this.targets);
  }
  private _mapTargets(actors: string[]): any[] {
    return actors.map(actor => {
      switch (actor) {
        case 'WOMAN':
          return {
            class: 'target-badge WOMAN',
            icon:"face_5",
            title: "ASC",
            short: "ASC"
          };
        case 'MAN':
          return {
            class: 'target-badge MAN',
            icon:"face",
            short: "SUP ASC",
            title: "SUPERVISEUR ASC"
          };
        case 'SM':
          return {
            class: 'target-badge SM',
            icon:"face",
            short: "STOCK",
            title: "STOCK MANAGER",
          };
        default:
          return {
            class: 'target-badge',
            icon:"person",
            title: "NO SE"
          };

      }
    })
  }

}
