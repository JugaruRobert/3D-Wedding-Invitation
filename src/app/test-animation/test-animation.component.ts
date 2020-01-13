import { Component, OnInit } from "@angular/core";
import {
  trigger,
  transition,
  animate,
  style,
  keyframes,
  state
} from "@angular/animations";

@Component({
  selector: "app-test-animation",
  templateUrl: "./test-animation.component.html",
  styleUrls: ["./test-animation.component.scss"]
})
export class TestAnimationComponent implements OnInit {
  isOpened = false;
  flipDiv = true;
  isTicketOpened = false;

  constructor() {}

  ngOnInit() {
    this.isOpened = false;
  }

  toggleEnvelope() {
    if (this.isTicketOpened) {
      this.isTicketOpened = false;
      setTimeout(() => (this.isOpened = !this.isOpened), 1000);
    } else {
      this.isOpened = !this.isOpened;
    }
  }

  onFlipClick() {
    if (this.isOpened) this.isOpened = false;
    this.flipDiv = !this.flipDiv;
  }

  toggleTicket() {
    this.isTicketOpened = !this.isTicketOpened;
  }
}
