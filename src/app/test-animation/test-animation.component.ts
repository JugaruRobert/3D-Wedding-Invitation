import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style, keyframes, state } from '@angular/animations';

@Component({
  selector: 'app-test-animation',
  templateUrl: './test-animation.component.html',
  styleUrls: ['./test-animation.component.scss'],
})

export class TestAnimationComponent implements OnInit {

  isOpened = false;

  constructor() { }

  ngOnInit() {
  }

  flipEnvelope() {
    this.isOpened = !this.isOpened;
  }
}

