import {
  Component,
  OnInit} from "@angular/core";

@Component({
  selector: "app-test-animation",
  templateUrl: "./test-animation.component.html",
  styleUrls: ["./test-animation.component.scss"]
})
export class TestAnimationComponent implements OnInit {
  isOpened: boolean = null;
  flipDiv: boolean = null;
  flipTicket: boolean = null;
  isTicketOpened: boolean = null;
  hoverTicket: boolean = null;

  envelopeText: string = "";

  constructor() {}

  ngOnInit() {
    this.envelopeText = location.pathname;
  }

  ngAfterViewInit() {}

  toggleEnvelope() {
    if (this.isTicketOpened) {
      this.isTicketOpened = false;
      setTimeout(() => (this.isOpened = !this.isOpened), 1100);
    } else {
      this.isOpened = !this.isOpened;
      this.isOpened
        ? setTimeout(() => (this.hoverTicket = true), 1000)
        : (this.hoverTicket = false);
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
    this.isTicketOpened
      ? (this.hoverTicket = false)
      : setTimeout(() => (this.hoverTicket = true), 1300);
  }
}
