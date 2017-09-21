import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { SocketService } from '../../../core/services/socket.service';

@Injectable()
export class NotesService {
  notesListed$: Observable<any>;

  constructor(private socket: SocketService) {
    this.socket.join('notes');
    this.notesListed$ = this.socket.listen('[Notes] Listed');
  }

  listNotes() {
    this.socket.emit('[Notes] List');
  }
}
