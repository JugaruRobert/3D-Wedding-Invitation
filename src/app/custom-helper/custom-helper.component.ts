import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-custom-helper",
  templateUrl: "./custom-helper.component.html",
  styleUrls: ["./custom-helper.component.scss"]
})
export class CustomHelperComponent implements OnInit {
  @Input() clickHere;

  constructor() {}

  ngOnInit() {}
}
