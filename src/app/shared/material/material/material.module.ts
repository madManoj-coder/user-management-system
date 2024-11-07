import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatNativeDateModule } from '@angular/material/core'


let allmodules = [MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatTabsModule,
  MatCardModule,MatSortModule,MatTableModule, MatButtonModule,MatSnackBarModule, MatDialogModule, MatDatepickerModule, MatFormFieldModule,
  MatInputModule, MatTooltipModule, MatSelectModule, MatNativeDateModule, MatPaginatorModule
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...allmodules
  ],
  exports: [
    ...allmodules
  ],
  providers : []
})
export class MaterialModule { }
