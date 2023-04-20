import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment.development';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private httpCliente = inject(HttpClient);
  private API = environment.URL;

  generateResponse(promt: string) {
    const requestBody = {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: promt }],
    };
    /* 
    const options = {
      headers: {
        'Conten-type': 'application/json',
        Authorization: `Bearer ${environment.APIKEY}`,
      },
    }; */

    return this.httpCliente.post<any>(this.API, requestBody);
  }
}
