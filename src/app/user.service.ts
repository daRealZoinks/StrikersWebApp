import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private filePath = 'users.txt';

  constructor() { }

  getUsers(): User[] {
    let users = localStorage.getItem(this.filePath);
    if (users) {
      return users.split('\n').map(userStr => {
        let parts = userStr.split(',');
        return {username: parts[0], password: parts[1]};
      });
    } else {
      return [];
    }
  }

  addUser(user: User): void {
    let users = this.getUsers();
    users.push(user);
    localStorage.setItem(this.filePath, users.map(user => `${user.username},${user.password}`).join('\n'));
  }

  connectUser(username: string): User | null {
    let users = this.getUsers();
    return users.find(user => user.username === username) ?? null;
  }
}
