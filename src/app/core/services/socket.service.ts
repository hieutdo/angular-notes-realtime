import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs/Rx';
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

  join(room: string) {
    this.connected$.subscribe(connected => {
      if (connected) {
        this.socket.emit('join', { room });
      }
    });
  }

  emit(event: string, data?: any) {
    this.socket.emit(event, data);
  }

  listen(event: string): Observable<any> {
    return new Observable(observer => {
      this.socket.on(event, data => {
        observer.next(data);
      });
      return () => this.socket.off(event);
    });
  }
}
