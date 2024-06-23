import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-informative-modal',
  templateUrl: './informative-modal.component.html',
  styleUrls: ['./informative-modal.component.scss'],
})
export class InformativeModalComponent  implements OnInit {

  @Input() data;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  public closeModal() {
    this.modalCtrl.dismiss();
  }

}
