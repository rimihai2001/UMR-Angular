import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting-message',
  templateUrl: './greeting-message.component.html',
  styleUrls: ['./greeting-message.component.scss']
})
export class GreetingMessageComponent implements OnInit {

  @Input() fullName: string;
  constructor() { }

  ngOnInit(): void {
  }

}
