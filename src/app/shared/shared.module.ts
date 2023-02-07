import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './layout/title/title.component';
import { NgxMaskModule } from 'ngx-mask';

const components = [TitleComponent]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    NgxMaskModule.forChild(),
  ],
  exports: [
    ...components,
    NgxMaskModule,
  ]
})
export class SharedModule { }
