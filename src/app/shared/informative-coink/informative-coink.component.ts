import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-informative-coink',
  templateUrl: './informative-coink.component.html',
  styleUrls: ['./informative-coink.component.scss'],
})
export class InformativeCoinkComponent  implements OnInit {

  @Input() image: string = '';
  @Input() tittle: string = '';
  @Input() text: string = '';
  constructor() { }

  ngOnInit() {}

}
