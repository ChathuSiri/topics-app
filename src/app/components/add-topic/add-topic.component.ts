import {Component, OnInit} from '@angular/core';
import {TopicsService} from '../../services/topics.service';

@Component({
  selector: 'app-add-topic',
  templateUrl: './add-topic.component.html',
  styleUrls: ['./add-topic.component.css']
})
export class AddTopicComponent implements OnInit {
  topicName = '';

  constructor(private topicsService: TopicsService) {
  }

  ngOnInit() {
  }

  addTopic() {
    console.log(this.topicName);
    this.topicsService.newTopic(this.topicName);
  }

}
