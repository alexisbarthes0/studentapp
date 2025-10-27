import { Component } from '@angular/core';
import { StudentService, Student } from '../services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html'
})
export class AddStudentComponent {
  student: Student = { nom: '', prenom: '', age: 0 };
  successMessage = '';
  errorMessage = '';

  constructor(private studentService: StudentService) {}

  onSubmit() {
    this.studentService.addStudent(this.student).subscribe({
      next: (data) => {
        this.successMessage = `Élève ${data.nom} ajouté !`;
        this.errorMessage = '';
        this.student = { nom: '', prenom: '', age: 0 }; // réinitialise le formulaire
      },
      error: (err) => {
        this.errorMessage = 'Erreur lors de l\'ajout';
        this.successMessage = '';
        console.error(err);
      }
    });
  }
}