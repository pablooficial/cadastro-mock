import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';
import { ClientsModule } from '../../clients.module';

const routes: Routes = [
  {
    path: '',
    component:RegisterComponent
  }
]

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ClientsModule

  ]
})
export class RegisterModule { }
