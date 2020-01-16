import {
  Component,
  OnInit } from "@angular/core";
import {EnvelopeTextPipe} from "../Utils/envelopeTextPipe";

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
  envelopeTextFontSize: number = 40;

  TEXT_BASE_LENGTH: number = 20;
  TEXT_BASE_SIZE: number = 40;

  constructor() {}

  ngOnInit() {
    this.envelopeText = location.pathname;
    this.computeEnvelopeFontSize();
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

  computeEnvelopeFontSize() {
    var envelopeTextPipe = new EnvelopeTextPipe();
    var text = envelopeTextPipe.transform(location.pathname);
    if(text.length <= this.TEXT_BASE_LENGTH)
        this.envelopeTextFontSize = this.TEXT_BASE_SIZE;
    else
    {
      var textDifference = text.length - this.TEXT_BASE_LENGTH;
      this.envelopeTextFontSize = this.TEXT_BASE_SIZE - textDifference - (textDifference/2);
    }
  }
}
