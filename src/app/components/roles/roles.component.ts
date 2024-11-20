import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRole } from '../../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css',
})
export class RolesComponent implements OnInit {
  roleLists: IRole[] = [];
  // or
  http = inject(HttpClient);

  // constructor(public http: HttpClient) {} same as above

  ngOnInit(): void {
    this.getAllRoles();
  }

  getAllRoles() {
    this.http
      .get('https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles')
      .subscribe((res: any) => {
        this.roleLists = res.data;
      });
  }

  version: number = 18;
  date: Date = new Date();
  username: string = 'John Doe';
  selectedRole: string = 'admin';

  showWelcomeMessage() {
    alert('Welcome ' + this.username + '!');
    // return `Welcome ${this.username}!`;
  }

  showMessage(msg: string) {
    alert(msg);
  }
}
