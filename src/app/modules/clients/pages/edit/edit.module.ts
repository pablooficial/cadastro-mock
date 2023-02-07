import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './edit.component';
import { ClientsModule } from '../../clients.module';
import { SharedModule } from '../../../../shared/shared.module';

const routes: Routes = [
  {
    path: '', component: EditComponent
  }
]

@NgModule({
  declarations: [EditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ClientsModule,
    SharedModule
  ]
})
export class EditModule { }
