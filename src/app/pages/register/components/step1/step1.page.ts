import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.page.html',
  styleUrls: ['./step1.page.scss'],
})
export class Step1Page implements OnInit {
  public tittle: string;
  public backRef: string;
  public step: number;

  public tittleInformative: string;
  public information: string;
  public image: string;

  public phoneNumber: string;
  public disableButton: boolean = true;
  private regex = /^3\d{9}$/;

  constructor(private navCtrl: NavController) {
    this.tittle = 'número celular';
    this.backRef = '/wellcome';
    this.step = 1;

    this.tittleInformative = '';
    this.information = 'Para comenzar, por favor ingresa tu número celular.';
    this.image = 'avatar-coin';

    this.phoneNumber = '(XXX - XXXXXXX)';
  }

  ngOnInit() {
  }

  public addNumber(number: string) {
    if(this.phoneNumber.includes('-')) {
      this.phoneNumber = '';
    }
    if(this.phoneNumber.length <=10) {
      this.phoneNumber += number;
      if(this.phoneNumber.length === 3)
        this.phoneNumber += ' ';
    }

    this.validatePhone(this.phoneNumber.replace(/ /g, ""));
  }

  public deleteNumber() {
    this.phoneNumber = this.phoneNumber.slice(0, this.phoneNumber.length -1);

    if(this.phoneNumber.length === 4) {
      this.deleteNumber();
    }

    if(this.phoneNumber.length === 0) {
      this.phoneNumber = '(XXX - XXXXXXX)';
    }

    this.validatePhone(this.phoneNumber.replace(/ /g, ""));
  }

  private validatePhone(number: string) {
    this.disableButton = this.regex.test(number) ? false : true;
  }


  public nextStep() {
    this.navCtrl.navigateForward('register/step2', {queryParams: {phone: this.phoneNumber.replace(/ /g, "")}});
  }

}
