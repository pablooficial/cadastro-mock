import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IClient } from '../../models/client';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {
  @Input() editClient!:IClient
  @Input() edit:boolean = false
  @Input() register:boolean = false
  @Output() formCallback: EventEmitter<IClient> = new EventEmitter()
  public form!: FormGroup;
  public sentForm: boolean = false

  constructor(
    private _fb: FormBuilder,
    // private _ts: NgToastService
  ) { }

  ngOnInit(): void {
    this.createForm()
    if(this.edit){
      this.setValuesForm(this.editClient)
    }
  }


  private createForm(): void{
    this.form = this._fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      cnpj: ['', [Validators.required, Validators.minLength(13)]],
      status: ['Ativo', [Validators.required]]
    })
  }

  private setValuesForm(values:IClient): void{
    console.log(values);

    this.form.patchValue({
      name: values.name,
      cnpj: values.cnpj,
      status: values.status
    })
  }


  public submitForm(): void{
    this.sentForm = true;
    if(this.form.invalid){
      // this._ts.error({detail:'Erro',summary:'Campos inválidos, por favor preencha-os corretamente.', sticky:true,position:'tr'})
      return
    }
    this.formCallback.emit(this.form.value)
  }
}
