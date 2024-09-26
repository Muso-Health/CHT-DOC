import {Component, Input, OnInit} from '@angular/core';
import {Related} from "../../entities/related";

@Component({
  selector: 'app-hashtag-list',
  templateUrl: './hashtag-list.component.html',
  styleUrl: './hashtag-list.component.css'
})
export class HashtagListComponent implements OnInit {

  @Input()
  row: Related[] = [];
  @Input()
  objectType: string = "";
  filtered: Related[] = [];

  ngOnInit(): void {
    console.log(this.row);
    console.log(this.objectType, "header");
    this.filtered = this.row.filter((item: Related) => item.objectType === this.objectType);
    console.log(this.filtered);
  }
}
