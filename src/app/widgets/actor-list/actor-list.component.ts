import {Component, Input, OnInit} from '@angular/core';
import {Actor} from "../../entities/actor";

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrl: './actor-list.component.css'
})
export class ActorListComponent implements OnInit {
  @Input()
  actors: string[] = [];
  objActors: any[] = [];
  icon: string = "bubble_chart";
  title: string = "";
  ngOnInit(): void {
    this.objActors = this._mapActors(this.actors);
  }
  private _mapActors(actors: string[]): any[] {
    return actors.map(actor => {
      switch (actor) {
        case 'CHW':
          return {
            class: 'actor-badge CHW',
            icon:"face_2",
            title: "ASC",
            short: "ASC"
          };
        case 'SV':
          return {
            class: 'actor-badge SV',
            icon:"face_3",
            short: "SUP ASC",
            title: "SUPERVISEUR ASC"
          };
        case 'SM':
          return {
            class: 'actor-badge SM',
            icon:"face",
            short: "STOCK",
            title: "STOCK MANAGER",
          };
        default:
          return {
            icon:"person",
            title: "NO SE"
          };

      }
    })
  }

}
