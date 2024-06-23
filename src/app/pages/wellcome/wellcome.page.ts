import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-wellcome',
  templateUrl: './wellcome.page.html',
  styleUrls: ['./wellcome.page.scss'],
})
export class WellcomePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() { }

  public navigate(route: string): void {
    this.navCtrl.navigateRoot(route);
  }

}
