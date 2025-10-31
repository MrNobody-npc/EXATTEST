import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-edit.html',
  styleUrls: ['./employee-edit.scss'] // same SCSS as add
})
export class EmployeeEditComponent implements OnInit {
  employee: any = {};
  apiUrl = 'http://localhost:3000/employees';

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.http.get(`${this.apiUrl}/${id}`).subscribe({
      next: (data: any) => this.employee = data,
      error: err => console.error('Error loading employee:', err)
    });
  }

  updateEmployee() {
    const id = this.route.snapshot.params['id'];
    this.http.put(`${this.apiUrl}/${id}`, this.employee).subscribe({
      next: () => this.router.navigate(['/employees']),
      error: err => console.error('Error updating employee:', err)
    });
  }

  cancel() {
    this.router.navigate(['/employees']);
  }
}
