import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {MatButtonModule, MatCardModule, MatInputModule, MatToolbarModule, MatTableModule} from '@angular/material';
import {MatPaginatorModule, MatProgressSpinnerModule, MatSelectModule, MatGridListModule} from '@angular/material';
import {MatDialogModule, MatIconModule} from '@angular/material';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {VehicleService} from './shared/vehicle/vehicle.service';
import {HttpClientModule} from '@angular/common/http';
import {VehicleListComponent} from './vehicle-list/vehicle-list.component';
import {DateTimeFormatPipe} from './shared/datetimeformat.pipe';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {VehicleEntryComponent} from './vehicle-entry/vehicle-entry.component';
import {ErrorDialogComponent} from './shared/error-dialog/error-dialog.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/vehicle-list', pathMatch: 'full'},
  {
    path: 'vehicle-list',
    component: VehicleListComponent
  },
  {
    path: 'vehicle-entry',
    component: VehicleEntryComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    VehicleListComponent,
    DateTimeFormatPipe,
    VehicleEntryComponent,
    ErrorDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatGridListModule,
    MatDialogModule,
    MatIconModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  entryComponents: [
    ErrorDialogComponent
  ],
  providers: [VehicleService],
  bootstrap: [AppComponent]
})
export class AppModule {}
