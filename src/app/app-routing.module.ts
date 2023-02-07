import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'clientes/lista',
    pathMatch: 'full'
  },
  {
    path: 'clientes',
    loadChildren: () => import('./modules/clients/clients.module').then(m => m.ClientsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
