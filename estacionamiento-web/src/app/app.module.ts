import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {MatButtonModule, MatCardModule, MatInputModule, MatToolbarModule, MatTableModule} from '@angular/material';
import {MatPaginatorModule, MatProgressSpinnerModule} from '@angular/material';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {VehicleService} from './shared/vehicle/vehicle.service';
import {HttpClientModule} from '@angular/common/http';
import {VehicleListComponent} from './vehicle-list/vehicle-list.component';
import {DateTimeFormatPipe} from './shared/datetimeformat.pipe';


@NgModule({
  declarations: [
    AppComponent,
    VehicleListComponent,
    DateTimeFormatPipe
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
    MatProgressSpinnerModule
  ],
  providers: [VehicleService],
  bootstrap: [AppComponent]
})
export class AppModule {}
