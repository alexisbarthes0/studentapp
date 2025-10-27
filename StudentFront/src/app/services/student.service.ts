import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Student {
  id?: string;
  nom: string;
  prenom: string;
  age: number;
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private apiUrl = '/api/student'; // ton endpoint .NET

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl);
  }
   addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.apiUrl, student);
  }
}
