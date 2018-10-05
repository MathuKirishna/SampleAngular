import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }


  public optionValue : any;

  public getDropDownValues(): Promise<String[]> {
    return this.http.get<String[]>('http://localhost:3000/primarysearch/city').toPromise();
  }
  //u can use promise or observables
  // NOTE:always use services to connect to server since it is a good practice
  public gettitlesDropDownValues(): Promise<String[]> {
    return this.http.get<String[]>('http://localhost:3000/primarysearch/title').toPromise();
  }
  public searchValues(title:String,city:String):Promise<String[]>{
    return this.http.get<String[]>('http://localhost:3000/primarysearch/search?title='+title+'&city='+city).toPromise();
  }
}
