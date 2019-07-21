import { Component, OnInit } from '@angular/core';
import {TopicsService} from '../../services/topics.service';
import {Observable} from 'rxjs';
import {Topic} from '../../model/topic';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  topics = Observable< Topic[]>
  constructor(private topicsServicece: TopicsService) { }

  ngOnInit() {
  }

  clicked() {
    this.topicsServicece.getTopic('jhh');
  }

  addClicked() {
    this.topicsServicece.newTopic('jhh');
  }
}
