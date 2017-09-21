import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

import { Note } from '../../../core/models/note';
import * as fromNotesStore from '../store';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css'],
})
export class NoteListComponent implements OnInit {
  notes$: Observable<Note[]>;

  constructor(private store: Store<fromNotesStore.State>) {}

  ngOnInit() {
    this.notes$ = this.store.select(fromNotesStore.selectEntitiesArray);
  }
}
