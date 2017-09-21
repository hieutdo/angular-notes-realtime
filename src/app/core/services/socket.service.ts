import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';
import * as socketio from 'socket.io-client';

import { environment } from '../../../environments/environment';

@Injectable()
export class SocketService {
  private socket: SocketIOClient.Socket;
  connected$ = new BehaviorSubject<boolean>(false);

  constructor() {
    this.socket = socketio.connect(environment.socket.baseUrl);
    this.socket.on('connect', () => this.connected$.next(true));
    this.socket.on('disconnect', () => this.connected$.next(false));
  }
}
