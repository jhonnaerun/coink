import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, ModalController, NavController } from '@ionic/angular';
import { InformativeModalComponent } from 'src/app/shared/informative-modal/informative-modal.component';
import { RegisterService } from '../../services/register.service';
import { DataRegister, RegisterContract } from '../../interfaces/resgiter';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.page.html',
  styleUrls: ['./step3.page.scss'],
})
export class Step3Page implements OnInit {
  public tittle: string;
  public backRef: string;
  public step: number;

  public tittleInformative: string;
  public information: string;
  public image: string;

  public checkTerms: boolean;
  public terms: RegisterContract;

  public data: DataRegister;
  private loading;

  constructor(private route: ActivatedRoute,
              private navCtrl: NavController,
              private loadingCtrl: LoadingController,
              private registerService: RegisterService,
              private modalCtrl: ModalController) {
    this.tittle = 'Finalizar';
    this.backRef = '/register/step2';
    this.step = 3;

    this.tittleInformative = 'estas muy cerca de ser parte de coink.';
    this.information = 'Solo es necesario que leas detenidamente el contrato que se encuentra al final de esta pantalla y lo aceptes.';
    this.image = 'avatar-security';

    this.terms = new RegisterContract();
  }

  ngOnInit() {
    this.route.queryParams.subscribe((resp: DataRegister) => {
      this.data = resp;
    });

    this.getTermsRegister();
  }

  private getTermsRegister() {
    this.registerService.getContractRegister().subscribe({
      next: resp => {
        this.terms = resp;
      }
    })
  }

  public register() {
    this.showLoading();
    this.registerService.registerCoink(this.data).subscribe({
      next: resp => {
        if(resp.code === 0) {
          setTimeout(() => {
            this.closeLoading();
            this.navCtrl.navigateRoot('/login');
            this.confirmShowModal('avatar-sorprise', 'Bienvenido a coink', '¡Cuenta creada exitosamente, tu marrano ya esta listo para que empieces a ahorrar!');
          }, 3000);
        } else {
          this.confirmShowModal('avatar-informative', 'Importante', '¡Tenemos un problema, intentalo más tarde!');
        }
      },
      error: error => {
        this.confirmShowModal('avatar-informative', 'Importante', '¡Tenemos un problema, intentalo más tarde!');
      }
    })
  }

  public async confirmShowModal(icon: string, tittle: string, message: string) {
    const modal = await this.modalCtrl.create({
      component: InformativeModalComponent,
      componentProps: {
        data: {
          icon,
          tittle,
          message
        }
      },
      backdropDismiss: false,
      cssClass: 'my-custom-class'
    });
    await modal.present();
  }

  private async showLoading() {
    this.loading = await this.loadingCtrl.create({
      cssClass: 'custom-loading-spinner',
      spinner: "dots",
      translucent: true,
    });
    await this.loading.present();
  }

  private closeLoading() {
    this.loading.dismiss();
  }

}
