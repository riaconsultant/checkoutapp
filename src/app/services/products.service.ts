import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class ProductsService {

  constructor(private http:HttpClient) { }

  getProduct(){
    return this.http.get(environment.api_url+"product.json");
  }

}
