import { Component, OnInit } from '@angular/core';
import {TopicsService} from '../../services/topics.service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  constructor(private topicsServicece: TopicsService) { }

  ngOnInit() {
  }

}
