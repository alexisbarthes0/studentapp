import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { HttpClient } from '@angular/common/http';


interface Student {
  nom: string;
  prenom: string;
  age: number;
}

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html'
})
export class StudentListComponent implements OnInit {

  students: Student[] = [];

constructor(private studentService: StudentService, private http: HttpClient) { }

 ngOnInit(): void {
    this.http.get<Student[]>('/api/student')
      .subscribe({
        next: (data) => this.students = data,
        error: (err) => console.error('Erreur API:', err)
      });
  }
}