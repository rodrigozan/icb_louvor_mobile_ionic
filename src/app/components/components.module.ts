import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

const PAGE_COMPONENTS = [
  HeaderComponent
];

@NgModule({
  declarations: [
    PAGE_COMPONENTS
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PAGE_COMPONENTS
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
