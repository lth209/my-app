import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import 'rxjs/add/operator/toPromise'
import { mainModule } from 'process';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) { }
  getTemp(city: string){
    var params = new HttpParams();
    params.set('apiKey','c1daac63907d295738a44dc4fb4c9faa');
    params.set('units', 'metric');
    params.set('q', city);

    this.http.get('api.openweathermap.org/data/2.5/find',{params: params, responseType: 'json'})
    .subscribe(res=>{
      console.log(res);
    })

  }
}
