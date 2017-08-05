import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LocalesListComponent } from './locale-list/locale-list.component';

@NgModule({
  imports: [
    FormsModule,
    RouterModule,
    CommonModule,
  ],
  exports: [LocalesListComponent],
  declarations: [LocalesListComponent]
})
export class LocalesModule { }
