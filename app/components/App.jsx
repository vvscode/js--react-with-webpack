import React, {Component} from 'react';
import Note from './Note.jsx';
import uuid from 'node-uuid';

const notes = [
  {id: uuid.v4(), task: 'Learn Webpack'},
  {id: uuid.v4(), task: 'Learn React'},
  {id: uuid.v4(), task: 'Do laundry'}
];

export default class App extends Component {
  render() {
    return (
      <div>
        <ul>{notes.map(this.renderNote)}</ul>
      </div>
    );
  }
  renderNote(note) {
    return (
      <li key={`note${note.id}`}>
        <Note task={note.task} />
      </li>
    );
  }
}