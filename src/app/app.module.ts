import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopicsComponent } from './components/topics/topics.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { AddTopicComponent } from './components/add-topic/add-topic.component';
import {FormsModule} from '@angular/forms';

const config: SocketIoConfig = { url: 'http://localhost:4444', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    TopicsComponent,
    AddTopicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
