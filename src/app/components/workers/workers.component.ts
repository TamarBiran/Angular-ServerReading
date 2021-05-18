import { Component, OnInit } from '@angular/core';
import { WorkersService, Worker } from 'src/app/services/workers.service';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit {

  workers: Worker[] = [];


  constructor(private serviceWorkers: WorkersService) {
    this.serviceWorkers.getWorkers()
      .subscribe((workers) => this.workers = workers);

  }

  ngOnInit(): void {
  }

}
