import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-progress-indicator",
  templateUrl: "./progress-indicator.component.html",
  styleUrls: ["./progress-indicator.component.css"],
})
export class ProgressIndicatorComponent implements OnInit {
  @Input() colSpan: number = 4;
  @Input() message: string;
  @Input() componentName: string;
  @Input() showComponentName: boolean = false;
  @Input() spinnerOnly: boolean = false;

  constructor() {}

  ngOnInit() {}
}
