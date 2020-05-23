import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-error-indicator",
  templateUrl: "./error-indicator.component.html",
  styleUrls: ["./error-indicator.component.css"],
})
export class ErrorIndicatorComponent implements OnInit {
  @Input() colSpan: number = 4;
  @Input() message: string;
  @Input() componentName: string;
  @Input() showComponentName: boolean = false;
  @Input() spinnerOnly: boolean = false;

  constructor() {}

  ngOnInit() {}
}
