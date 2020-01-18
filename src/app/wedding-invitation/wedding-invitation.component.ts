import { Component, OnInit, HostListener } from "@angular/core";
import { EnvelopeTextPipe } from "../Utils/envelopeTextPipe";

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
  showInvitation = true;

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
    this.envelopeText = location.pathname;
    this.computeEnvelopeFontSize();
    setTimeout(() => this.setClickHere("clickHereEnvelope", 0), 5000);
    setTimeout(() => this.setClickHere("clickHereTopEnvelope", 0), 5000);
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

  @HostListener('window:resize', ['$event'])
  onResize(event)
  {
    this.computeEnvelopeFontSize();
  }

  computeEnvelopeFontSize() {
    var defaultSize = this.computeDefaultTextSize();

    var envelopeTextPipe = new EnvelopeTextPipe();
    var text = envelopeTextPipe.transform(location.pathname);
    
    if(text.length <= 20)
    {
      this.envelopeTextFontSize = defaultSize;
      return;
    }
    var maxWidth = this.computeMaxWidth();
    this.envelopeTextFontSize = Math.ceil(maxWidth / text.length * (defaultSize / (maxWidth / 20)))+0.5;
  }

  computeMaxWidth() {
    if(window.innerWidth >= 950)
      return 510;
    
    return 80/100 * window.innerWidth;
  }

  computeDefaultTextSize() {
    if(window.innerWidth >= 950)
      return 40;
    
    return (80/100 * window.innerWidth) / 20;
  }

  toggleAll() {
    this.showInvitation = !this.showInvitation;
  }
}
