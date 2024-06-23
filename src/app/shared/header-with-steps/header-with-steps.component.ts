import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-with-steps',
  templateUrl: './header-with-steps.component.html',
  styleUrls: ['./header-with-steps.component.scss'],
})
export class HeaderWithStepsComponent  implements OnInit {


  @Input() tittle: string = '';
  @Input() backRef: string = '';
  @Input() step: number = 0;
  constructor() { }

  ngOnInit() {}

}
