import { Component, OnInit } from '@angular/core';
import { CallApiService } from '../call-api.service';
//import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  idCompany: any;
  idTransport: any;
  companies: any;
  listCompanies: any;
  transports: any
  listTransportById: any;
  cars: any;
  listCars: any;
  count = 1;
  isShowTransport = false;
  isShowCar = false;
  constructor(
    private callApi: CallApiService
  ) { }

  ngOnInit(): void {
    this.getAllCompany();
  }

  getAllCompany() {
    this.callApi.getAllCompany().subscribe(res => {
      this.companies = res;
      this.listCompanies = this.companies.data;
    }, err => {
      console.log(err);
    })
  }

  getTransportByCompanyId(id: number) {
    this.callApi.getTransportByCompanyId(id).subscribe(res => {
      this.transports = res;
      this.listTransportById = this.transports.data;
    }, err => {
      console.log(err);
    })
    this.idCompany = id;
    this.isShowTransport = !this.isShowTransport;
    console.log(this.isShowTransport);
  }

  getCarByTransportId(idTransport: number, idCompany: number) {
    this.callApi.getCarByTransportId(idTransport).subscribe(res => {
      this.cars = res;
      this.listCars = this.cars.data;
    }, err => {
      console.log(err);
    })
    this.idTransport = idTransport;
    this.idCompany = idCompany;
    this.isShowCar = !this.isShowCar;
    console.log(this.isShowCar);

  }
}
