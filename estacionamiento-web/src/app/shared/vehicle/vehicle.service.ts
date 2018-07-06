import {HttpParams} from '@angular/common/http';
import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class VehicleService {

  constructor(private http: HttpClient) {}

  getVehicleInParking(page: number, size: number): Observable<any> {
    const params = new HttpParams().set('page', page.toString()).set('size', size.toString());
    return this.http.get<any>('//localhost:8080/api/vehicle/getVehicleInParking', {params: params});
  }


}
