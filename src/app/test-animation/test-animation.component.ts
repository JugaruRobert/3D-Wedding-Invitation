import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-test-animation",
  templateUrl: "./test-animation.component.html",
  styleUrls: ["./test-animation.component.scss"]
})
export class TestAnimationComponent implements OnInit {
  isOpened = false;
  flipDiv = true;
  flipTicket = false;
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
    if (this.isOpened) {
      if (this.isTicketOpened) this.flipTicket = !this.flipTicket;
      else {
        this.toggleEnvelope();
        setTimeout(() => (this.flipDiv = !this.flipDiv), 1300);
      }
    } else this.flipDiv = !this.flipDiv;
  }

  toggleTicket() {
    this.isTicketOpened = !this.isTicketOpened;
  }
}
