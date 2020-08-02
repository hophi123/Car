import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as config } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CallApiService {

  constructor(private http: HttpClient) { }

  getAllCompany() {
    return this.http.get(`${config.hostServer}/companies`)
  }

  getTransportByCompanyId(id: number) {
    return this.http.get(`${config.hostServer}/transportsByCompanyId/` +id)
  }

  getCarByTransportId(id: number){
    return this.http.get(`${config.hostServer}/carsByTransportId/` +id)
  }

}
