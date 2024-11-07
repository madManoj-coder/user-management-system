import { Injectable } from '@angular/core';
import { Iuser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private storageKey = 'users';

  constructor() { }

  getUsers(): Iuser[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  addUser(user: Iuser): void {
    const users = this.getUsers();
    user.id = new Date().getTime(); // Unique ID based on timestamp
    users.push(user);
    localStorage.setItem(this.storageKey, JSON.stringify(users));
  }

  updateUser(user: Iuser): void {
    const users = this.getUsers().map(u => u.id === user.id ? user : u);
    localStorage.setItem(this.storageKey, JSON.stringify(users));
  }

  deleteUser(id: number): void {
    const users = this.getUsers().filter(user => user.id !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(users));
  }
}
