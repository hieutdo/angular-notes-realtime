import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

import { SocketService } from './core/services/socket.service';
import * as fromRoot from './core/store';
import * as uiActions from './core/store/actions/ui.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  socketStatus$: Observable<string>;

  constructor(
    private store: Store<fromRoot.State>,
    private socket: SocketService
  ) {}

  ngOnInit() {
    this.socketStatus$ = this.store
      .select(fromRoot.selectSocketStatus)
      .map(connected => (connected ? 'connected' : 'disconnected'));

    this.socket.connected$
      .map(connected => new uiActions.SetSocketConnected(connected))
      .subscribe(this.store);
  }
}
