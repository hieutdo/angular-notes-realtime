import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

import { Note } from '../../../core/models/note';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css'],
})
export class NoteItemComponent implements OnChanges {
  @Input() note: Note;
  @Output() onNoteUpdated = new EventEmitter<Note>();
  @Output() onNoteDeleted = new EventEmitter<Note>();

  editMode = false;
  newNoteBody: string;

  constructor() {}

  ngOnChanges() {
    this.newNoteBody = this.note.body;
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
    if (!this.editMode) {
      this.newNoteBody = this.note.body;
    }
  }

  updateNote() {
    this.onNoteUpdated.emit({
      ...this.note,
      body: this.newNoteBody,
    });
    this.toggleEditMode();
  }

  deleteNote() {
    this.onNoteDeleted.emit(this.note);
  }
}
