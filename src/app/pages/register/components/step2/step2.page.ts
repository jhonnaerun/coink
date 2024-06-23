import { Component, OnInit } from '@angular/core';
import { AbstractControl, ValidationErrors, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DocumentType } from 'src/app/interfaces/commons';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.page.html',
  styleUrls: ['./step2.page.scss'],
})
export class Step2Page implements OnInit {
  public tittle: string;
  public backRef: string;
  public step: number;

  public tittleInformative: string;
  public information: string;
  public image: string;

  public dataForm: FormGroup;
  public documents: DocumentType[] = [];
  public expeditionDate: string;
  public bornDate: string;
  public nowDate: string;
  public acceptBornDate: string;

  public showPassword: boolean;
  public showPasswrodConfirm: boolean;
  public Phone: string;


  constructor(private form: FormBuilder,
              private navCtrl: NavController,
              private route: ActivatedRoute,
              private commonService: CommonService) {
    this.tittle = 'datos de cuenta';
    this.backRef = '/register';
    this.step = 2;

    this.tittleInformative = '¿cuáles son tus datos?';
    this.information = 'Ahora necesitamos saber algunos datos tuyos.';
    this.image = 'avatar-large';

    const today = new Date();
    this.nowDate = this.formatDate(today);
    this.acceptBornDate = this.formatDate(this.subtractYears(today, 18));

    this.showPassword = false;
    this.showPasswrodConfirm = false;
  }

  ngOnInit() {
    this.route.queryParams.subscribe(({phone}) => {
      this.Phone = phone;
      this.initForm();
    })
    this.getDocuments();
  }

  private initForm(): void {
    this.dataForm = this.form.group({
      documentType: ['', Validators.required],
      document: ['', Validators.required],
      expeditionDate: [undefined, Validators.required],
      bornDate: [ undefined, Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      emailConfirm: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      passwordConfirm: ['', [Validators.required]],
      phone: [this.Phone, Validators.required],
    }, { validators: [this.passwordMatchValidator, this.emailMatchValidator] });
  }

  private getDocuments(): void {
    this.commonService.documentType().subscribe({
      next: resp => {
        this.documents = resp;
      },
      error: error => {
        console.log(error);
      }
    })
  }

  public onDateChange(event: any): string {
    return event.detail.value;
  }

  public nextStep() {
    const {emailConfirm, passwordConfirm, ...value} = this.dataForm.value;
    this.navCtrl.navigateForward('register/step3', {queryParams: value});
  }

  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }

  private subtractYears(date: Date, years: number): Date {
    const newDate = new Date(date);
    newDate.setFullYear(newDate.getFullYear() - years);
    return newDate;
  }

  private emailMatchValidator(control: AbstractControl): ValidationErrors | null {
    const email = control.get('email');
    const emailConfirm = control.get('emailConfirm');

    if (email && emailConfirm && email.value !== emailConfirm.value) {
      return { emailMismatch: true };
    }

    return null;
  }

  private passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const passwordConfirm = control.get('passwordConfirm');

    if (password && passwordConfirm && password.value !== passwordConfirm.value) {
      return { passwordMismatch: true };
    }

    return null;
  }

}
