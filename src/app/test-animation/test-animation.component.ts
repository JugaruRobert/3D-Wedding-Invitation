import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit
} from "@angular/core";
import { FlipModule, FlipComponent } from "ngx-flip";

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

  constructor() {}

  ngOnInit() {}

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
    this.hoverTicket = !this.isTicketOpened;
  }
}
