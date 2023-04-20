import { Component, inject } from '@angular/core';
import { ChatService } from './services/chat.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'appChatGpt';
  private readonly apiServi = inject(ChatService);
  chatColetion$!: Observable<any>;
  message: string = '';
  isVisible = false;
  isError = false;
  conteintMessage: string[] = [];

  sendMessage() {
    this.isVisible = true;
    console.log('dando click');
    this.chatColetion$ = this.apiServi.generateResponse(this.message);

    this.chatColetion$.subscribe(
      (data) => {
        console.log(data.choices[0].message.content);
        this.conteintMessage = [
          ...this.conteintMessage,
          data.choices[0].message.content,
        ];
        this.isVisible = false;
        this.message = '';
      },
      (error) => {
        this.isVisible = false;
        this.message = '';
        this.isError = true;
      }
    );
  }
}
