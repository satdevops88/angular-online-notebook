import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './components/page/page.component';
import { RouterModule, Routes } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { SessionStorageService } from 'src/app/services/session-storage.service';

const materialModules = [
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule
];

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
  },
];

@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule.forChild(routes),
    ...materialModules
  ],
  providers: [
    SessionStorageService
  ]
})
export class PageModule { }
