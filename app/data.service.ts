import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Http, HttpModule, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/Rx'; // adds ALL RxJS statics & operators to Observable


@Injectable()
export class DataService {
    private _url: string ="assets/data.json";
    //private _url: string = "http://10.101.10.184:8080/get_pie_data";
    constructor(private _http:Http){}
    
    getData(){
    return this._http.get(this._url)
        .map((response: Response) => {return response.json();})
      }

}