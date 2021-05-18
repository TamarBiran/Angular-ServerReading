import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Role {
  id: number;
  describe: string,
}

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  getRoles() {
    return this.httpService.get<Role[]>('/assets/roles.json');
  }

  constructor(private httpService: HttpClient) { }
}
