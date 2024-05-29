import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private httpClient = inject(HttpClient)

  getTodo(todoId: string) {
    return this.httpClient.get(`https://5ed74760152c310016d84d62.mockapi.io/api/todos/${todoId}`);
  }

}
