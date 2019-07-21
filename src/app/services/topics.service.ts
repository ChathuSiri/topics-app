import { Injectable } from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {Topic} from '../model/topic';

@Injectable({
  providedIn: 'root'
})
export class TopicsService {

  currentTopics = this.socket.fromEvent<Topic>('topics');
  constructor(private socket: Socket) {this.currentTopics.subscribe(data => console.log(data));
  }

  getTopic(id: string) {
    this.socket.emit('getTopic', id);
  }

  newTopic(id: string) {
    this.socket.emit('newTopic', id);
  }
}
