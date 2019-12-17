import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style, keyframes, state } from '@angular/animations';

@Component({
  selector: 'app-test-animation',
  templateUrl: './test-animation.component.html',
  styleUrls: ['./test-animation.component.scss']
})

export class TestAnimationComponent implements OnInit {
  isOpened = false;
  flipDiv = true;
  isTicketOpened = false;

  constructor() { }

  ngOnInit() {
    this.isOpened = false;
  }

  openEnvelope() {
    this.isOpened = !this.isOpened;
  }

  onFlipClick() {
    if(this.isOpened)
      this.isOpened = false;
    this.flipDiv = !this.flipDiv;
  }

  openTicket() {
    this.isTicketOpened = !this.isTicketOpened;
  }

}

