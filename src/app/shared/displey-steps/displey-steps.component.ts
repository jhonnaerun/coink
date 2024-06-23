import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-displey-steps',
  templateUrl: './displey-steps.component.html',
  styleUrls: ['./displey-steps.component.scss'],
})
export class DispleyStepsComponent  implements OnInit {
  public indicatorStep = new Array(3);

  @Input() selectedStep: number = 0;
  constructor() { }

  ngOnInit() {
    this.printStep();
  }

  private printStep(): void {
    for (let index = 0; index < this.selectedStep; index++) {
      this.indicatorStep[index] = `${index + 1}`
    }
  }

}
