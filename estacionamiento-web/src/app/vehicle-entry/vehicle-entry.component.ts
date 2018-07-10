import {ErrorDialogComponent} from '../shared/error-dialog/error-dialog.component';
import {VehicleService} from '../shared/vehicle/vehicle.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-vehicle-entry',
  templateUrl: './vehicle-entry.component.html',
  styleUrls: ['./vehicle-entry.component.css']
})
export class VehicleEntryComponent implements OnInit {

  vehicle: any = {};
  vehicleTypes: Array<string> = ['CAR', 'MOTORCYCLE'];

  constructor(private route: ActivatedRoute, private router: Router,
    private vehicleService: VehicleService, public dialog: MatDialog) {}

  ngOnInit() {
  }

  gotoList() {
    this.router.navigate(['/vehicle-list']);
  }

  registerVehicleEntry(form: NgForm) {
    this.vehicleService.registerEntry(form).subscribe(result => {
      this.gotoList();
    }, error => {
      //      console.log(error);
      //      if (error instanceof HttpErrorResponse) {
      //        if (error.status === 400) {
      //          console.log('BAD REQUEST' + error.error);
      //        }
      //
      //        this.dialog.open(ErrorDialogComponent, {
      //          data: error.error
      //        });
      //      }
      /**/
      console.error(error);

      if (error instanceof HttpErrorResponse) {
        if (!navigator.onLine) {

          this.dialog.open(ErrorDialogComponent, {
            data: {message: 'No Internet Connection'}
          });

        } else if (error.status === 400 || error.status === 500) {

          this.dialog.open(ErrorDialogComponent, {
            data: error.error
          });

        } else {

          this.dialog.open(ErrorDialogComponent, {
            data: {code: error.status, message: error.statusText}
          });

        }
      } else {
        // Handle Client Error (Angular Error, ReferenceError...)
        //        router.navigate(['/error'], {queryParams: {error: error}});
        // TODO
        console.error('Implementar pagina error', error);
      }

    });
  }

}
