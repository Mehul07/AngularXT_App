import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class StudentService {
    API_STUDENT_DETAIL = './assets/Students_Data.json';
    constructor(private _http: HttpClient) {}

    getStudentDetails(): Observable<any> {
        return this._http.get(this.API_STUDENT_DETAIL);
    }
}