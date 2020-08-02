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
  isShowPopup = false;
  isShowEdit = false;
  cars: any;
  listCars: any;
  companies: any;
  listCompanies: any;
  trasports: any;
  listTransports: any;
  transportById: any
  listTransportById = [];
  carById: any;
  carInfo: any;
  listCarById = [];
  isShowTransport = [];
  isShowCar = [];
  key: any;
  idStyle: any;
  constructor(
    private callApi: CallApiService
  ) {
  }

  ngOnInit(): void {
    this.getAllCompany();
    this.getAllTransport();
    this.getAllCar();
  }

  getAllCompany() {
    this.callApi.getAllCompany().subscribe(res => {
      this.companies = res;
      this.listCompanies = this.companies.data;
    }, err => {
      console.log(err);
    })
  }

  getAllTransport() {
    this.callApi.getAllTransport().subscribe(res => {
      this.trasports = res;
      this.listTransports = this.trasports.data;
    }, err => {
      console.log(err);
    })
  }

  getAllCar() {
    this.callApi.getAllCar().subscribe(res => {
      this.cars = res;
      this.listCars = this.cars.data;
    }, err => {
      console.log(err);
    })
  }

  getTransportByCompanyId(id: number) {

    this.callApi.getTransportByCompanyId(id).subscribe(res => {
      this.transportById = res;
      this.listTransportById[id] = this.transportById.data;
    }, err => {
      console.log(err);
    })
    this.idCompany = id;
    for (let company of this.listCompanies) {
      if (company.id == id) {
        this.isShowTransport[id] = !this.isShowTransport[id];
        console.log(this.isShowTransport[id]);
      }
    }
  }

  getCarByTransportId(idTransport: number, idCompany: number) {
    this.callApi.getCarByTransportId(idTransport).subscribe(res => {
      this.carById = res;
      this.listCarById[idTransport] = this.carById.data;
    }, err => {
      console.log(err);
    })
    this.idTransport = idTransport;
    this.idCompany = idCompany;
    for (let transport of this.listTransports) {
      if (transport.id == idTransport) {
        this.isShowCar[idTransport] = !this.isShowCar[idTransport]
      }
    }
  }
  clickButton(key: number, id: number) {
    this.key = key;
    this.idStyle = id;
    this.isShowPopup = true;
    if(this.key == 1){
      this.carInfo = {
        transport_id: '',
        matter: '',
        date_in_yard: '',
        car: '',
        vin_no: '',
        booking_day: '',
        EC: '',
        parking_day: '',
        remarks: '',
        customer: '',
        inspection_company: '',
      }
      this.isShowEdit = false;
    }
    if(this.key==2){
      this.carInfo = this.listCars[id-1];
      this.isShowEdit = true;
    }
  }

  show(){
    if(this.isShowPopup){
      return 'container-show';
    }else{
      return 'container';
    }
  }

}
