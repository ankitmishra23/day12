import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  i;
  private apilink="https://5f0493568b06d60016dded8e.mockapi.io/demo";
  constructor(private httpclient:HttpClient) { }
  public request(){
    return this.httpclient.get(this.apilink);
  }
  findindex(index:number)
  {
    this.i=index;
  }
}
