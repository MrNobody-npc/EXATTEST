import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-add.html',
  styleUrls: ['./employee-add.scss']
})
export class EmployeeAddComponent {
  employee = {
    EMP_CODE: '',
    EMP_PREFIX: '',
    EMP_FNAME: '',
    EMP_LNAME: '',
    EMP_SEX: ''
  };

  apiUrl = 'http://localhost:3000/employees';

  constructor(private http: HttpClient, private router: Router) {}

  addEmployee() {
    this.http.post(this.apiUrl, this.employee).subscribe({
      next: () => this.router.navigate(['/employees']),
      error: err => console.error('Error adding employee:', err)
    });
  }

  cancel() {
    this.router.navigate(['/employees']);
  }
}
