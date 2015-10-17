import React, {Component} from 'react';
import Notes from './Notes.jsx';
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
        <Notes items={notes} />
      </div>
    );
  }
}