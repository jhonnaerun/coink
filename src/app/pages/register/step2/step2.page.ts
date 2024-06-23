import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
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

  constructor(private form: FormBuilder,
              private commonService: CommonService) {
    this.tittle = 'datos de cuenta';
    this.backRef = '/register';
    this.step = 2;

    this.tittleInformative = '¿cuáles son tus datos?';
    this.information = 'Ahora necesitamos saber algunos datos tuyos.';
    this.image = 'avatar-large';
  }

  ngOnInit() {
    this.getDocuments();
    this.initForm();
  }

  private initForm() {
    this.dataForm = this.form.group({
      documentType: ['', Validators.required],
      document: ['', Validators.required],
      expeditionDate: ['', Validators.required],
      bornDate: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  private getDocuments() {
    this.commonService.documentType().subscribe({
      next: resp => {
        this.documents = resp;
      },
      error: error => {

      }
    })
  }

  test() {
    console.log(this.dataForm.value);
  }

}
