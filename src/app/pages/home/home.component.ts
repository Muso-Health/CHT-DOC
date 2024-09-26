import {Component, OnInit} from '@angular/core';
import {MainMenuItem} from "../../entities/main-menu-item";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  menuItems: MainMenuItem[] = [];
  cols = 2;
  rowHeight = '500px';
  handsetPortrait = false;

  constructor(private responsive: BreakpointObserver) {

  }

  ngOnInit(): void {
    this.menuItems = [
      {
        title:"Formulaires",
        description:"Formulaires du CHT MUSO",
        iconUrl:'https://angular-university.s3-us-west-1.amazonaws.com/course-images/angular-forms-course-small.jpg',
        link:"/forms"
      },
      {
        title:"Tâches",
        description:"Tâches du CHT MUSO",
        iconUrl:'https://angular-university.s3-us-west-1.amazonaws.com/course-images/angular-forms-course-small.jpg',
        link:"/tasks"
      },
      {
        title:"Protocoles",
        description:"Protocoles implementés dans le CHT MUSO",
        iconUrl:'https://angular-university.s3-us-west-1.amazonaws.com/course-images/angular-forms-course-small.jpg',
        link:"/protocols"
      },
      {
        title:"Documentation",
        description:"Liste de Docs",
        iconUrl:'https://angular-university.s3-us-west-1.amazonaws.com/course-images/angular-forms-course-small.jpg',
        link:"/docs"
      }
    ];
    this._reSize();
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
        this.cols = 2
        this.rowHeight = '450px'
        const breakpoints = result.breakpoints
        if (breakpoints[Breakpoints.HandsetPortrait]) {
          this.cols = 1
          this.rowHeight = '400px'
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
