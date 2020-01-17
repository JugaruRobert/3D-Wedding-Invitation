import { Component, OnInit } from "@angular/core";
import { EnvelopeTextPipe } from "../utils/envelopeTextPipe";

@Component({
  selector: "wedding-invitation",
  templateUrl: "./wedding-invitation.component.html",
  styleUrls: ["./wedding-invitation.component.scss"]
})
export class WeddingInvitation implements OnInit {
  isOpened: boolean = null;
  flipDiv: boolean = null;
  flipTicket: boolean = null;
  isTicketOpened: boolean = null;
  hoverTicket: boolean = null;
  envelopeText: string = "";
  envelopeTextFontSize: number = 40;

  TEXT_BASE_LENGTH: number = 20;
  TEXT_BASE_SIZE: number = 40;

  public clickHere = {
    clickHereEnvelope: 1,
    clickHereTopEnvelope: 1,
    clickHereTicket: 1,
    clickHereTopTicket: 1
  };

  constructor() {}

  ngOnInit() {
    this.setClickHere("clickHereEnvelope", 0);
    this.setClickHere("clickHereTopEnvelope", 0);
  }

  setClickHere(trigger: string, value: number) {
    switch (value) {
      case 1: {
        this.clickHere[trigger] += 1;
        break;
      }
      case 2: {
        this.clickHere[trigger] = 2;
        break;
      }
      default: {
        this.clickHere[trigger] === 1
          ? (this.clickHere[trigger] = 0)
          : (this.clickHere[trigger] += 1);
      }
    }
    this.envelopeText = location.pathname;
    this.computeEnvelopeFontSize();
  }

  ngAfterViewInit() {}

  afterToggleEnvelope() {
    if (this.isOpened) {
      this.setClickHere("clickHereTopEnvelope", 2);
      this.setClickHere("clickHereEnvelope", 1);
      this.setClickHere("clickHereTopTicket", 0);
      setTimeout(() => {
        this.hoverTicket = true;
      }, 1000);
    } else {
      this.hoverTicket = false;
      this.setClickHere("clickHereTopEnvelope", 0);
      this.setClickHere("clickHereEnvelope", 0);
      this.setClickHere("clickHereTopTicket", 1);
    }
  }

  toggleEnvelope() {
    if (this.isTicketOpened) {
      this.toggleTicket();
      setTimeout(() => {
        this.isOpened = !this.isOpened;
        this.afterToggleEnvelope();
      }, 1100);
    } else {
      this.isOpened = !this.isOpened;
      this.afterToggleEnvelope();
    }
  }

  onFlipClick() {
    if (this.isOpened) {
      if (this.isTicketOpened) {
        this.flipTicket = !this.flipTicket;
        this.setClickHere("clickHereTicket", 2);
      } else {
        this.toggleEnvelope();
        setTimeout(() => (this.flipDiv = !this.flipDiv), 1300);
      }
    } else {
      this.flipDiv = !this.flipDiv;
      this.setClickHere("clickHereEnvelope", 2);
      this.setClickHere("clickHereTopEnvelope", 0);
    }
  }

  toggleTicket() {
    this.isTicketOpened = !this.isTicketOpened;
    this.isTicketOpened
      ? (this.hoverTicket = false)
      : setTimeout(() => (this.hoverTicket = true), 1300);
    this.setClickHere("clickHereTopTicket", 2);
    this.setClickHere("clickHereTicket", 0);
  }

  computeEnvelopeFontSize() {
    var envelopeTextPipe = new EnvelopeTextPipe();
    var text = envelopeTextPipe.transform(location.pathname);
    if (text.length <= this.TEXT_BASE_LENGTH)
      this.envelopeTextFontSize = this.TEXT_BASE_SIZE;
    else {
      var textDifference = text.length - this.TEXT_BASE_LENGTH;
      this.envelopeTextFontSize =
        this.TEXT_BASE_SIZE - textDifference - textDifference / 2;
    }
  }
}
