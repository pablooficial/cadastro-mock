import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  {
    path: 'lista',
    loadChildren: () => import('./pages/list/list.module').then(m => m.ListModule)
  },
  {
    path: 'cadastrar',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'editar',
    loadChildren: () => import('./pages/edit/edit.module').then(m => m.EditModule)
  },
]

@NgModule({
  declarations: [
    ClientFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    ClientFormComponent
  ]
})
export class ClientsModule { }
