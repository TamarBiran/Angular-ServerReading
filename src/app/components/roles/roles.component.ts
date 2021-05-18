import { Component, OnInit } from '@angular/core';
import { RolesService, Role } from 'src/app/services/roles.service';
import { WorkersService, Worker } from 'src/app/services/workers.service';


@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  roles: Role[] = [];
  workers: Worker[] = [];
  avg: number[] = [];
  avgNum: number = 0;

  constructor(private serviceRoles: RolesService, private serviceWorkers: WorkersService) {
    this.serviceRoles.getRoles()
      .subscribe((roles) => this.roles = roles);

    this.serviceWorkers.getWorkers()
      .subscribe((workers) => this.workers = workers);
  }

  avgCalc(role: Role) {
    let sum: number = 0;
    let count: number = 0;
    this.workers.forEach(w => {
      if (w.id === role.id) {
        sum += w.salary;
        count++;
      }
    });
    return sum / count;
  }

  ngOnInit(): void {
  }

}
