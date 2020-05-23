import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-list-group",
  templateUrl: "./list-group.component.html",
  styleUrls: ["./list-group.component.css"],
})
export class ListGroupComponent implements OnInit {
  @Input() nameProperty = "name";
  @Input() items: any[];
  @Input() selectedItem: any;
  @Output() onItemSelected = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onClick(item) {
    this.onItemSelected.emit(item);
  }
}
