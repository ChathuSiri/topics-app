import { Injectable } from '@angular/core';
import {Socket} from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class TopicsService {

  currentDocuments = this.socket.fromEvent<Document>('topics');
  constructor(private socket: Socket) {this.currentDocuments.subscribe(data => console.log(data));
  }

  getTopic(id: string) {
    this.socket.emit('getTopic', id);
  }

  newTopic(id: string) {
    this.socket.emit('newTopic', id);
  }
}
