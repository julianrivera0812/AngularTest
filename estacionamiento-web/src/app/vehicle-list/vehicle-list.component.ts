import {Component, OnInit, ViewChild} from '@angular/core';
import {VehicleService} from '../shared/vehicle/vehicle.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {Observable} from 'rxjs/Observable';
import {merge} from 'rxjs/observable/merge';
import {of as observableOf} from 'rxjs/observable/of';
import {catchError} from 'rxjs/operators/catchError';
import {map} from 'rxjs/operators/map';
import {startWith} from 'rxjs/operators/startWith';
import {switchMap} from 'rxjs/operators/switchMap';


@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  vehicleInParking: any;
  displayedColumns = ['plate', 'vehicleType', 'entryDate'];
  dataSource = new MatTableDataSource();

  resultsLength = 0;
  isLoadingResults = true;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private vehicleService: VehicleService) {}

  ngOnInit() {

    merge(this.paginator.page)
      .pipe(
      startWith({}),
      switchMap(() => {
        this.isLoadingResults = true;
        return this.vehicleService.getVehicleInParking(this.paginator.pageIndex, 10);
      }),
      map(response => {
        console.log(' VehicleListComponent map ->');
        console.log(response);
        // Flip flag to show that loading has finished.
        this.isLoadingResults = false;
        this.resultsLength = response.page.totalElements;
        this.vehicleInParking = response;
        return response.page.content;
      }),
      catchError(error => {
        this.isLoadingResults = false;
        console.log(' VehicleListComponent catchError ->');
        console.log(error);
        return observableOf([]);
      })
      ).subscribe(dataContent => {
        console.log('VehicleListComponent subscribe ->');
        console.log(dataContent);
        this.dataSource.data = dataContent;
      });
  }

}
