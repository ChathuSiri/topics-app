import { Injectable } from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {Topic} from '../model/topic';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TopicsService {

  currentTopics = this.socket.fromEvent<string>('topics').pipe(map(data => JSON.parse(data)));
  constructor(private socket: Socket) {this.currentTopics.subscribe(data => console.log(data));
  }

  getTopic(id: string) {
    this.socket.emit('getTopic', id);
  }

  newTopic(id: string) {
    this.socket.emit('newTopic', id);
  }

  upvoteTopic(id: string) {
    this.socket.emit('upvote', id);
  }

  downvoteTopic(id: string) {
    this.socket.emit('downvote', id);
  }
}
