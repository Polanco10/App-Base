import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { environment as env} from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  
  constructor(private http:HttpClient) { }
  getData():Observable<response> {
    return this.http.get<response>(env.url+'/home')
  }
}
interface response {
  message:string;
  status:string
}