import {Component, OnInit} from '@angular/core';
import {TopicsService} from '../../services/topics.service';
import {Observable} from 'rxjs';
import {Topic} from '../../model/topic';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  topics: Observable< {}[]>;

  constructor(private topicsService: TopicsService) {
  }

  ngOnInit() {
    this.topics = this.topicsService.currentTopics.pipe(map(data => Object.values(data)),
      map(data => data.sort((topic1: Topic, topic2: Topic) => topic2.votes - topic1.votes)));
  }

  upvote(topicName: string) {
    this.topicsService.upvoteTopic(topicName);
  }

  downvote(topicName: string) {
    this.topicsService.downvoteTopic(topicName);
  }
}
